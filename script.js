//Setting element variables
//Audio elements
const qClip = document.getElementById('Q');
const wClip = document.getElementById('W');
const eClip = document.getElementById('E');
const aClip = document.getElementById('A');
const sClip = document.getElementById('S');
const dClip = document.getElementById('D');
const zClip = document.getElementById('Z');
const xClip = document.getElementById('X');
const cClip = document.getElementById('C');
//Drum pad div elements
const q = document.getElementById('chord1');
const w = document.getElementById('chord2');
const e = document.getElementById('chord3');
const a = document.getElementById('clap');
const s = document.getElementById('closed-hh');
const d = document.getElementById('open-hh');
const z = document.getElementById('kick');
const x = document.getElementById('stick');
const c = document.getElementById('snare');
//Other div elements
const display = document.getElementById('display');
const pad = document.getElementById('pad');


//Functions that reset+play the audio clip, sets the display innerText, and sets the background color to yellow(lit).
//NOTE: currentTime = 0 is necessary to allow the audio to restart when played before it ends.
function setQ() {qClip.currentTime = 0; qClip.play(); display.innerText = 'Chord 1'; q.style.backgroundColor = 'rgb(250, 250, 200)';};
function setW() {wClip.currentTime = 0; wClip.play(); display.innerText = 'Chord 2'; w.style.backgroundColor = 'rgb(250, 250, 200)';};
function setE() {eClip.currentTime = 0; eClip.play(); display.innerText = 'Chord 3'; e.style.backgroundColor = 'rgb(250, 250, 200)';};
function setA() {aClip.currentTime = 0; aClip.play(); display.innerText = 'Clap'; a.style.backgroundColor = 'rgb(250, 250, 200)';};
function setS() {sClip.currentTime = 0; sClip.play(); display.innerText = 'Closed Hi-Hat'; s.style.backgroundColor = 'rgb(250, 250, 200)';};
function setD() {dClip.currentTime = 0; dClip.play(); display.innerText = 'Open Hi-Hat'; d.style.backgroundColor = 'rgb(250, 250, 200)';};
function setZ() {zClip.currentTime = 0; zClip.play(); display.innerText = 'Kick Drum'; z.style.backgroundColor = 'rgb(250, 250, 200)';};
function setX() {xClip.currentTime = 0; xClip.play(); display.innerText = 'Side Stick'; x.style.backgroundColor = 'rgb(250, 250, 200)';};
function setC() {cClip.currentTime = 0; cClip.play(); display.innerText = 'Snare Drum'; c.style.backgroundColor = 'rgb(250, 250, 200)';};

//Pressed and depressed key functions
//The pressed functions add the pressed class to the element while the depressed functions remove the pressed class and changes the background
//color to it's original(unlit) color.
function pressedQ() {q.classList.add('pressed');}
function depressedQ() {q.classList.remove('pressed'); q.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedW() {w.classList.add('pressed');}
function depressedW() {w.classList.remove('pressed'); w.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedE() {e.classList.add('pressed');}
function depressedE() {e.classList.remove('pressed'); e.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedA() {a.classList.add('pressed');}
function depressedA() {a.classList.remove('pressed'); a.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedS() {s.classList.add('pressed');}
function depressedS() {s.classList.remove('pressed'); s.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedD() {d.classList.add('pressed');}
function depressedD() {d.classList.remove('pressed'); d.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedZ() {z.classList.add('pressed');}
function depressedZ() {z.classList.remove('pressed'); z.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedX() {x.classList.add('pressed');}
function depressedX() {x.classList.remove('pressed'); x.style.backgroundColor = 'rgb(202, 98, 60)'}
function pressedC() {c.classList.add('pressed');}
function depressedC() {c.classList.remove('pressed'); c.style.backgroundColor = 'rgb(202, 98, 60)'}

//Adding the pressed class on mousedown and removing on mouseup or mouseout.
q.addEventListener('mousedown', pressedQ);
q.addEventListener('mouseup', depressedQ);
q.addEventListener('mouseout', depressedQ);
w.addEventListener('mousedown', pressedW);
w.addEventListener('mouseup', depressedW);
w.addEventListener('mouseout', depressedW);
e.addEventListener('mousedown', pressedE);
e.addEventListener('mouseup', depressedE);
e.addEventListener('mouseout', depressedE);
a.addEventListener('mousedown', pressedA);
a.addEventListener('mouseup', depressedA);
a.addEventListener('mouseout', depressedA);
s.addEventListener('mousedown', pressedS);
s.addEventListener('mouseup', depressedS);
s.addEventListener('mouseout', depressedS);
d.addEventListener('mousedown', pressedD);
d.addEventListener('mouseup', depressedD);
d.addEventListener('mouseout', depressedD);
z.addEventListener('mousedown', pressedZ);
z.addEventListener('mouseup', depressedZ);
z.addEventListener('mouseout', depressedZ);
x.addEventListener('mousedown', pressedX);
x.addEventListener('mouseup', depressedX);
x.addEventListener('mouseout', depressedX);
c.addEventListener('mousedown', pressedC);
c.addEventListener('mouseup', depressedC);
c.addEventListener('mouseout', depressedC);


//KEYBOARD FUNCTIONALITY

//Adding key press event listners
document.addEventListener('keydown', offPush);
document.addEventListener('keyup', releaseKey);


function offPush(k) {
  //This function checks the key pressed and executes code that adds the pressed class for the key that was pressed.
  switch(k.key.toLowerCase()) { //toLowerCase() is necessary here to include capital versions of keys(shift+key)
    case 'q':
    pressedQ();
    break;
    case 'w':
    pressedW();
    break;
    case 'e':
    pressedE();
    break;
    case 'a':
    pressedA();
    break;
    case 's':
    pressedS();
    break;
    case 'd':
    pressedD();
    break;
    case 'z':
    pressedZ();
    break;
    case 'x':
    pressedX();
    break;
    case 'c':
    pressedC();
    break;
  }
}

function releaseKey(k) {
  //This function checks the key pressed and executes code that removes the pressed class for the key that was pressed.
  switch(k.key.toLowerCase()) { //toLowerCase() is necessary here to include capital versions of keys(shift+key)
    case 'q':
    depressedQ();
    break;
    case 'w':
    depressedW();
    break;
    case 'e':
    depressedE();
    break;
    case 'a':
    depressedA();
    break;
    case 's':
    depressedS();
    break;
    case 'd':
    depressedD();
    break;
    case 'z':
    depressedZ();
    break;
    case 'x':
    depressedX();
    break;
    case 'c':
    depressedC();
    break;
  }
  //document.addEventListener('keydown', onPush); //This re-adds the onPush event listener if removed on keydown.
}

function onPush(k) {
  //This function checks the key pressed and executes code that resets+plays the audio clip and sets the display innerText.
  switch(k.key.toLowerCase()) { //toLowerCase() is necessary here to include capital versions of keys(shift+key)
    case 'q':
    setQ();
    break;
    case 'w':
    setW();
    break;
    case 'e':
    setE();
    break;
    case 'a':
    setA();
    break;
    case 's':
    setS();
    break;
    case 'd':
    setD();
    break;
    case 'z':
    setZ();
    break;
    case 'x':
    setX();
    break;
    case 'c':
    setC();
    break;
  }
  //document.removeEventListener('keydown', onPush); //This is necessary to stop onPush from repeating when a key is held down.
  //NOTE: This currently is removing the functionality to press 2 keys at the same time.
}


//Power switch functions
function addListeners() {
  //Mouse event listeners
  q.addEventListener('mousedown', setQ);
  w.addEventListener('mousedown', setW);
  e.addEventListener('mousedown', setE);
  a.addEventListener('mousedown', setA);
  s.addEventListener('mousedown', setS);
  d.addEventListener('mousedown', setD);
  z.addEventListener('mousedown', setZ);
  x.addEventListener('mousedown', setX);
  c.addEventListener('mousedown', setC);

  //Keyboard event listeners
  document.addEventListener('keydown', onPush);
}

function removeListeners() {
  //Mouse event listeners
  q.removeEventListener('mousedown', setQ);
  w.removeEventListener('mousedown', setW);
  e.removeEventListener('mousedown', setE);
  a.removeEventListener('mousedown', setA);
  s.removeEventListener('mousedown', setS);
  d.removeEventListener('mousedown', setD);
  z.removeEventListener('mousedown', setZ);
  x.removeEventListener('mousedown', setX);
  c.removeEventListener('mousedown', setC);

  //Keyboard event listeners
  document.removeEventListener('keydown', onPush);
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



//REPLICATE VOLUME SLIDER

//MAKE IT POSSIBLE TO PRESS MULTIPLE(AT LEAST 2) BUTTONS SIMULTANEOUSLY WHILE ALSO STOPPING AUDIO FROM BEING REPEATED WHEN KEY IS BEING HELD DOWN