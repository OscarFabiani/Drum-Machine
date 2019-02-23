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

q.addEventListener('click', () => {qClip.currentTime = 0; qClip.play(); display.innerText = 'Chord 1'});
w.addEventListener('click', () => {wClip.currentTime = 0; wClip.play(); display.innerText = 'Chord 2'});
e.addEventListener('click', () => {eClip.currentTime = 0; eClip.play(); display.innerText = 'Chord 3'});
a.addEventListener('click', () => {aClip.currentTime = 0; aClip.play(); display.innerText = 'Clap'});
s.addEventListener('click', () => {sClip.currentTime = 0; sClip.play(); display.innerText = 'Closed Hi-Hat'});
d.addEventListener('click', () => {dClip.currentTime = 0; dClip.play(); display.innerText = 'Open Hi-Hat'});
z.addEventListener('click', () => {zClip.currentTime = 0; zClip.play(); display.innerText = 'Kick Drum'});
x.addEventListener('click', () => {xClip.currentTime = 0; xClip.play(); display.innerText = 'Side Stick'});
c.addEventListener('click', () => {cClip.currentTime = 0; cClip.play(); display.innerText = 'Snare Drum'});

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

document.body.addEventListener('keydown', playKey);