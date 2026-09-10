const weights=[128,64,32,16,8,4,2,1];
const nibbleMap=['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011','1100','1101','1110','1111'];
const hexChars='0123456789ABCDEF';
const state=JSON.parse(localStorage.getItem('byteforge')||'null')||{streak:0,lessons:[],binary:{correct:0,total:0},hex:{correct:0,total:0}};
const save=()=>localStorage.setItem('byteforge',JSON.stringify(state));
const $=id=>document.getElementById(id);

function showSection(id){document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id===id));document.querySelectorAll('[data-section]').forEach(b=>b.classList.toggle('active',b.dataset.section===id));history.replaceState(null,'','#'+id);}
document.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>showSection(b.dataset.section)));
window.addEventListener('hashchange',()=>showSection(location.hash.slice(1)||'home'));

function updateGlobal(){
  $('streakBadge').textContent=`🔥 ${state.streak} streak`;
  $('progressBadge').textContent=`${Math.round(state.lessons.length/4*100)}% learned`;
  $('lessonStatus').textContent=`${state.lessons.length} / 4 lessons`;
}

document.querySelectorAll('.lesson-card').forEach(card=>{
  const key=card.dataset.lesson;
  const btn=card.querySelector('.lesson-done');
  if(state.lessons.includes(key)){card.classList.add('done');btn.textContent='✓ Learned'}
  btn.addEventListener('click',()=>{
    const i=state.lessons.indexOf(key);
    if(i<0){state.lessons.push(key);card.classList.add('done');btn.textContent='✓ Learned'}
    else{state.lessons.splice(i,1);card.classList.remove('done');btn.textContent='Mark learned'}
    save();updateGlobal();
  });
});

function makeBits(container,value,interactive=false,onChange){
  container.innerHTML='';
  weights.forEach(w=>{
    const bit=document.createElement('button'); bit.type='button'; bit.className='bit'; bit.textContent=(value&w)?'1':'0';
    if(value&w)bit.classList.add('on');
    if(interactive)bit.addEventListener('click',()=>onChange(w)); else bit.disabled=true;
    container.appendChild(bit);
  });
}

makeBits($('heroBits'),173);
$('heroDecimal').textContent='173';

document.querySelectorAll('.lookup-grid').forEach(grid=>{
  for(let i=0;i<16;i++){const el=document.createElement('div');el.className='lookup-item';el.innerHTML=`${nibbleMap[i]}<b>${hexChars[i]}</b>`;grid.appendChild(el)}
});
for(let i=0;i<256;i+=17){const el=document.createElement('div');el.innerHTML=`${i}<b>${i.toString(16).toUpperCase().padStart(2,'0')}</b>`;$('decimalHexGrid').appendChild(el)}

let binaryMode='decToBin',binaryPrompt=173,binaryBits=0;
function randomByte(){return Math.floor(Math.random()*256)}
function binaryString(n){return n.toString(2).padStart(8,'0')}
function setBinaryPrompt(){binaryPrompt=randomByte();binaryBits=0; $('binaryPrompt').textContent=binaryMode==='decToBin'?binaryPrompt:binaryString(binaryPrompt); $('binaryInput').value='';$('binaryFeedback').textContent='';$('binaryFeedback').className='feedback';renderBinaryBits();renderWeights();}
function renderBinaryBits(){makeBits($('binaryBits'),binaryBits,true,w=>{binaryBits^=w; $('binaryInput').value=binaryString(binaryBits);renderBinaryBits();renderWeights()})}
function renderWeights(){const list=$('weightsList');list.innerHTML='';weights.forEach(w=>{const r=document.createElement('div');r.className='weight-row';r.innerHTML=`<span>${w}</span><span>${binaryBits&w?'ON':'off'}</span><b>${binaryBits&w?'1':'0'}</b>`;list.appendChild(r)});$('bitFormula').textContent=binaryBits}
function binaryCheck(){
 const raw=$('binaryInput').value.trim();let correct=false;
 if(binaryMode==='decToBin'){correct=/^[01]{8}$/.test(raw)&&parseInt(raw,2)===binaryPrompt}else{correct=/^\d{1,3}$/.test(raw)&&Number(raw)===parseInt(binaryPrompt,2)}
 state.binary.total++;
 if(correct){state.binary.correct++;state.streak++;$('binaryFeedback').textContent='✓ Correct. Nice.';$('binaryFeedback').className='feedback success';setTimeout(setBinaryPrompt,500)}
 else{$('binaryFeedback').textContent=`Not quite — ${binaryMode==='decToBin'?binaryString(binaryPrompt):parseInt(binaryPrompt,2)} is the answer.`;$('binaryFeedback').className='feedback error';state.streak=0}
 save();updateStats();updateGlobal();
}
function updateStats(){
 const b=state.binary; $('binaryScore').textContent=`${b.correct} correct`; $('binaryAccuracy').textContent=`${b.total?Math.round(b.correct/b.total*100):100}% accuracy`;
 const h=state.hex; $('hexScore').textContent=`${h.correct} correct`; $('hexAccuracy').textContent=`${h.total?Math.round(h.correct/h.total*100):100}% accuracy`;
}
$('binaryCheck').addEventListener('click',binaryCheck);$('binaryInput').addEventListener('keydown',e=>{if(e.key==='Enter')binaryCheck()});$('binaryNext').addEventListener('click',setBinaryPrompt);
$('binaryDirection').addEventListener('click',()=>{binaryMode=binaryMode==='decToBin'?'binToDec':'decToBin';$('binaryDirection').textContent=binaryMode==='decToBin'?'Binary → Decimal':'Decimal → Binary';document.querySelector('#binary .mode-tag').textContent=binaryMode==='decToBin'?'DECIMAL → BINARY':'BINARY → DECIMAL';setBinaryPrompt()});

let hexPrompt='D6';
function setHexPrompt(){const n=randomByte();hexPrompt=n.toString(16).toUpperCase().padStart(2,'0');$('hexPrompt').textContent=hexPrompt;const bits=binaryString(n);$('hexNibbleA').textContent=bits.slice(0,4);$('hexNibbleB').textContent=bits.slice(4);$('hexInput').value='';$('hexFeedback').textContent='';$('hexFeedback').className='feedback'}
function hexCheck(){const raw=$('hexInput').value.trim();const answer=binaryString(parseInt(hexPrompt,16));state.hex.total++;if(/^[01]{8}$/.test(raw)&&raw===answer){state.hex.correct++;state.streak++;$('hexFeedback').textContent='✓ Correct. Each hex digit is one nibble.';$('hexFeedback').className='feedback success';setTimeout(setHexPrompt,500)}else{state.streak=0;$('hexFeedback').textContent=`Not quite — ${answer} is ${hexPrompt}.`;$('hexFeedback').className='feedback error'}save();updateStats();updateGlobal()}
$('hexCheck').addEventListener('click',hexCheck);$('hexInput').addEventListener('keydown',e=>{if(e.key==='Enter')hexCheck()});$('hexNext').addEventListener('click',setHexPrompt);
$('resetProgress').addEventListener('click',()=>{if(confirm('Reset all ByteForge progress?')){localStorage.removeItem('byteforge');location.reload()}});

updateGlobal();updateStats();renderBinaryBits();renderWeights();setBinaryPrompt();setHexPrompt();
showSection(location.hash.slice(1)||'home');
