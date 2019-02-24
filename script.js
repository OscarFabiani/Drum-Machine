const qClip = document.getElementById('Q');
const wClip = document.getElementById('W');
const eClip = document.getElementById('E');
const aClip = document.getElementById('A');
const sClip = document.getElementById('S');
const dClip = document.getElementById('D');
const zClip = document.getElementById('Z');
const xClip = document.getElementById('X');
const cClip = document.getElementById('C');

const q = document.getElementById('chord1');
const w = document.getElementById('chord2');
const e = document.getElementById('chord3');
const a = document.getElementById('clap');
const s = document.getElementById('closed-hh');
const d = document.getElementById('open-hh');
const z = document.getElementById('kick');
const x = document.getElementById('stick');
const c = document.getElementById('snare');

const display = document.getElementById('display');

function setQ() {qClip.currentTime = 0; qClip.play(); display.innerText = 'Chord 1'};
function setW() {wClip.currentTime = 0; wClip.play(); display.innerText = 'Chord 2'};
function setE() {eClip.currentTime = 0; eClip.play(); display.innerText = 'Chord 3'};
function setA() {aClip.currentTime = 0; aClip.play(); display.innerText = 'Clap'};
function setS() {sClip.currentTime = 0; sClip.play(); display.innerText = 'Closed Hi-Hat'};
function setD() {dClip.currentTime = 0; dClip.play(); display.innerText = 'Open Hi-Hat'};
function setZ() {zClip.currentTime = 0; zClip.play(); display.innerText = 'Kick Drum'};
function setX() {xClip.currentTime = 0; xClip.play(); display.innerText = 'Side Stick'};
function setC() {cClip.currentTime = 0; cClip.play(); display.innerText = 'Snare Drum'};

function addListeners() {
  q.addEventListener('click', setQ);
  w.addEventListener('click', setW);
  e.addEventListener('click', setE);
  a.addEventListener('click', setA);
  s.addEventListener('click', setS);
  d.addEventListener('click', setD);
  z.addEventListener('click', setZ);
  x.addEventListener('click', setX);
  c.addEventListener('click', setC);
  document.body.addEventListener('keydown', playKey);
}

function removeListeners() {
  q.removeEventListener('click', setQ);
  w.removeEventListener('click', setW);
  e.removeEventListener('click', setE);
  a.removeEventListener('click', setA);
  s.removeEventListener('click', setS);
  d.removeEventListener('click', setD);
  z.removeEventListener('click', setZ);
  x.removeEventListener('click', setX);
  c.removeEventListener('click', setC);
  document.body.removeEventListener('keydown', playKey);
}


function playKey(k) {
  switch(k.key.toLowerCase()) { //toLowerCase() is necessary here to include capital versions of keys(shift+key)
    case 'q':
    qClip.currentTime = 0; //currentTime = 0 is necessary to allow the audio to restart when played before it ends.
    qClip.play();
    display.innerText = 'Chord 1';
    break;
    case 'w':
    wClip.currentTime = 0;
    wClip.play();
    display.innerText = 'Chord 2';
    break;
    case 'e':
    eClip.currentTime = 0;
    eClip.play();
    display.innerText = 'Chord 3';
    break;
    case 'a':
    aClip.currentTime = 0;
    aClip.play();
    display.innerText = 'Clap';
    break;
    case 's':
    sClip.currentTime = 0;
    sClip.play();
    display.innerText = 'Closed Hi-Hat';
    break;
    case 'd':
    dClip.currentTime = 0;
    dClip.play();
    display.innerText = 'Open Hi-Hat';
    break;
    case 'z':
    zClip.currentTime = 0;
    zClip.play();
    display.innerText = 'Kick Drum';
    break;
    case 'x':
    xClip.currentTime = 0;
    xClip.play();
    display.innerText = 'Side Stick';
    break;
    case 'c':
    cClip.currentTime = 0;
    cClip.play();
    display.innerText = 'Snare Drum';
    break;
  }
}


//Power switch
const mySwitch = document.getElementById('switch');
const knob = document.getElementById('knob');

function switchOff() {
  knob.removeEventListener('click', switchOff);
  mySwitch.style.justifyContent = 'flex-start';
  knob.style.backgroundColor = 'red';
  knob.addEventListener('click', switchOn);
  knob.textContent = "OFF";
  knob.style.color = 'black';
  display.textContent = '';
  removeListeners();
}

function switchOn() {
  knob.removeEventListener('click', switchOn);
  mySwitch.style.justifyContent = 'flex-end';
  knob.style.backgroundColor = 'blue';
  knob.addEventListener('click', switchOff);
  knob.textContent = "ON";
  knob.style.color = 'white';
  display.textContent = 'Welcome';
  addListeners();
}

switchOn();

//var clone = element.cloneNode(true);

//ADD STYLING, REPLICATE POWER SWITCH, AND REPLICATE VOLUME SLIDER 