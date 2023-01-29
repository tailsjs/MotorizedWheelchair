let isOn = false;

function turnOn() {
  if (!isOn) {
    isOn = true;
    console.log("Wheelchair turned on");
  } else {
    console.log("Wheelchair is already on");
  }
}

function turnOff() {
  if (isOn) {
    isOn = false;
    console.log("Wheelchair turned off");
  } else {
    console.log("Wheelchair is already off");
  }
}

function moveForward() {
  if (isOn) {
    console.log("Wheelchair moving forward");
  } else {
    console.log("Turn on the wheelchair first");
  }
}

function moveBackward() {
  if (isOn) {
    console.log("Wheelchair moving backward");
  } else {
    console.log("Turn on the wheelchair first");
  }
}

turnOn();
moveForward();
moveBackward();
turnOff();
moveForward();
