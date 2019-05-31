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
const mySwitch = document.getElementById('switch');
const knob = document.getElementById('knob');
const volume = document.getElementById('volume');



function clearDisplay() {
  //This function clears the display element. This function is neccessary to be passed into event listeners.
  display.textContent = '';
}

function removeEndedListeners() {
  //This function removes ended event listeners from all audio clips. This is to prevent the display from clearing while another audio clip is
  //playing and is meant to be used in conjuction with adding an ended event listner to an individual clip when playback begins.
  qClip.removeEventListener('ended', clearDisplay);
  wClip.removeEventListener('ended', clearDisplay);
  eClip.removeEventListener('ended', clearDisplay);
  aClip.removeEventListener('ended', clearDisplay);
  sClip.removeEventListener('ended', clearDisplay);
  dClip.removeEventListener('ended', clearDisplay);
  zClip.removeEventListener('ended', clearDisplay);
  xClip.removeEventListener('ended', clearDisplay);
  zClip.removeEventListener('ended', clearDisplay);
}


//Functions that reset+play the audio clip, playS the display innerText, set the background color to yellow(lit), remove event listners for
//all clips ending to clear the display, and adds an event listener for the clip ending to clear the display.
//NOTE: currentTime = 0 is necessary to allow the audio to restart when played before it ends.
function playQ() {
  qClip.currentTime = 0;
  qClip.play(); display.innerText = 'Chord 1';
  q.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  qClip.addEventListener('ended', clearDisplay);
}
function playW() {
  wClip.currentTime = 0;
  wClip.play(); display.innerText = 'Chord 2';
  w.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  wClip.addEventListener('ended', clearDisplay);
}
function playE() {
  eClip.currentTime = 0;
  eClip.play(); display.innerText = 'Chord 3';
  e.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  eClip.addEventListener('ended', clearDisplay);
}
function playA() {
  aClip.currentTime = 0;
  aClip.play(); display.innerText = 'Clap';
  a.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  aClip.addEventListener('ended', clearDisplay);
}
function playS() {
  sClip.currentTime = 0;
  sClip.play(); display.innerText = 'Closed Hi-Hat';
  s.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  sClip.addEventListener('ended', clearDisplay);
}
function playD() {
  dClip.currentTime = 0; dClip.play();
  display.innerText = 'Open Hi-Hat';
  d.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  dClip.addEventListener('ended', clearDisplay);
}
function playZ() {
  zClip.currentTime = 0; zClip.play();
  display.innerText = 'Kick Drum';
  z.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  zClip.addEventListener('ended', clearDisplay);}
function playX() {
  xClip.currentTime = 0;
  xClip.play(); display.innerText = 'Side Stick';
  x.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  xClip.addEventListener('ended', clearDisplay);
}
function playC() {
  cClip.currentTime = 0;
  cClip.play(); display.innerText = 'Snare Drum';
  c.style.backgroundColor = 'rgb(250, 250, 200)';
  removeEndedListeners();
  cClip.addEventListener('ended', clearDisplay);
}


//Pressed and depressed key functions
//The pressed functions add the pressed class to the element while the depressed functions remove the pressed class and changes the background
//color to it's original(unlit) color.
function pressedQ() {q.classList.add('pressed');}
function depressedQ() {q.classList.remove('pressed'); q.style.backgroundColor = '#4056a1'}
function pressedW() {w.classList.add('pressed');}
function depressedW() {w.classList.remove('pressed'); w.style.backgroundColor = '#4056a1'}
function pressedE() {e.classList.add('pressed');}
function depressedE() {e.classList.remove('pressed'); e.style.backgroundColor = '#4056a1'}
function pressedA() {a.classList.add('pressed');}
function depressedA() {a.classList.remove('pressed'); a.style.backgroundColor = '#4056a1'}
function pressedS() {s.classList.add('pressed');}
function depressedS() {s.classList.remove('pressed'); s.style.backgroundColor = '#4056a1'}
function pressedD() {d.classList.add('pressed');}
function depressedD() {d.classList.remove('pressed'); d.style.backgroundColor = '#4056a1'}
function pressedZ() {z.classList.add('pressed');}
function depressedZ() {z.classList.remove('pressed'); z.style.backgroundColor = '#4056a1'}
function pressedX() {x.classList.add('pressed');}
function depressedX() {x.classList.remove('pressed'); x.style.backgroundColor = '#4056a1'}
function pressedC() {c.classList.add('pressed');}
function depressedC() {c.classList.remove('pressed'); c.style.backgroundColor = '#4056a1'}

//Adding listeners for adding the pressed class on mousedown and removing on mouseup or mouseout.
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
  //This function checks the key pressed and executes code that replayS+plays the audio clip and playS the display innerText.
  switch(k.key.toLowerCase()) { //toLowerCase() is necessary here to include capital versions of keys(shift+key)
    case 'q':
    playQ();
    break;
    case 'w':
    playW();
    break;
    case 'e':
    playE();
    break;
    case 'a':
    playA();
    break;
    case 's':
    playS();
    break;
    case 'd':
    playD();
    break;
    case 'z':
    playZ();
    break;
    case 'x':
    playX();
    break;
    case 'c':
    playC();
    break;
  }
  //document.removeEventListener('keydown', onPush); //This is necessary to stop onPush from repeating when a key is held down.
  //NOTE: This currently is removing the functionality to press 2 keys at the same time.
}


//Volume

function setVolume() {
  qClip.volume = volume.value / 100;
  wClip.volume = volume.value / 100;
  eClip.volume = volume.value / 100;
  aClip.volume = volume.value / 100;
  sClip.volume = volume.value / 100;
  dClip.volume = volume.value / 100;
  zClip.volume = volume.value / 100;
  xClip.volume = volume.value / 100;
  cClip.volume = volume.value / 100;
}

function displayVolume() {
  display.innerText = 'VOLUME: ' + volume.value;
}
function timeoutVolume() {
  display.innerText = 'VOLUME: ' + volume.value;
  setTimeout(() => display.innerText = '', 500);
}

//Adding volume slider listeners
volume.addEventListener('change', setVolume);
volume.addEventListener('input', setVolume);



//Power switch

function addOnListeners() {
  //Mouse event listeners
  q.addEventListener('mousedown', playQ);
  w.addEventListener('mousedown', playW);
  e.addEventListener('mousedown', playE);
  a.addEventListener('mousedown', playA);
  s.addEventListener('mousedown', playS);
  d.addEventListener('mousedown', playD);
  z.addEventListener('mousedown', playZ);
  x.addEventListener('mousedown', playX);
  c.addEventListener('mousedown', playC);

  volume.addEventListener('change', timeoutVolume);
  volume.addEventListener('input', displayVolume);

  //Keyboard event listeners
  document.addEventListener('keydown', onPush);

}

function removeOnListeners() {
  //Mouse event listeners
  q.removeEventListener('mousedown', playQ);
  w.removeEventListener('mousedown', playW);
  e.removeEventListener('mousedown', playE);
  a.removeEventListener('mousedown', playA);
  s.removeEventListener('mousedown', playS);
  d.removeEventListener('mousedown', playD);
  z.removeEventListener('mousedown', playZ);
  x.removeEventListener('mousedown', playX);
  c.removeEventListener('mousedown', playC);

  volume.removeEventListener('change', timeoutVolume);
  volume.removeEventListener('input', displayVolume);

  //Keyboard event listeners
  document.removeEventListener('keydown', onPush);
}


function switchOff() {
  mySwitch.style.justifyContent = 'flex-start';
  knob.style.backgroundColor = 'red';
  knob.textContent = "OFF";
  knob.style.color = 'black';
  clearDisplay();
  display.style.backgroundColor = 'rgb(192, 177, 146)';
  knob.removeEventListener('click', switchOff);
  knob.addEventListener('click', switchOn);
  removeOnListeners();
}

function switchOn() {
  mySwitch.style.justifyContent = 'flex-end';
  knob.style.backgroundColor = 'blue';
  knob.textContent = "ON";
  knob.style.color = 'white';
  display.textContent = 'WELCOME';
  display.style.backgroundColor = 'rgb(251, 243, 128)';
  knob.removeEventListener('click', switchOn);
  knob.addEventListener('click', switchOff);
  addOnListeners();
}

switchOn();


//UPDATE SOUND FILES

//POSSIBLE IMPROVEMENTS:
//ADD CSS BROWSER COMPTABILITY(SPECIFICALLY FOR VOLUME RANGE INPUT)
//MAKE IT POSSIBLE TO PRESS MULTIPLE(AT LEAST 2) BUTTONS SIMULTANEOUSLY WHILE ALSO STOPPING AUDIO FROM BEING REPEATED WHEN KEY IS BEING HELD DOWN.