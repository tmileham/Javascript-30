const buttons = document.querySelectorAll("div.key");
const sounds = document.querySelectorAll("audio");

const userPress = (e) => {
  switch (e.code) {
    case "KeyA":
      removeStyle("65");
      break;
    case "KeyS":
      removeStyle("83");
      break;
    case "KeyD":
      removeStyle("68");
      break;
    case "KeyF":
      removeStyle("70");
      break;
    case "KeyG":
      removeStyle("71");
      break;
    case "KeyH":
      removeStyle("72");
      break;
    case "KeyJ":
      removeStyle("74");
      break;
    case "KeyK":
      removeStyle("75");
      break;
    case "KeyL":
      removeStyle("76");
      break;
  }
};

function userRelease(e) {
  switch (e.code) {
    case "KeyA":
      console.log(e.code);
      console.log(e.keyCode);
      play("65");
      break;
    case "KeyS":
      play("83");
      break;
    case "KeyD":
      play("68");
      break;
    case "KeyF":
      play("70");
      break;
    case "KeyG":
      play("71");
      break;
    case "KeyH":
      play("72");
      break;
    case "KeyJ":
      play("74");
      break;
    case "KeyK":
      play("75");
      break;
    case "KeyL":
      play("76");
      break;
  }
}

const play = (data) => {
  addStyle(data);
  playSound(data);
};

const playSound = (data) => {
  for (let s = 0; s < sounds.length; s++) {
    sound = sounds[s];

    if (sound.getAttribute("data-key") === data) {
      sound.volume = 0.2;
      sound.play();
    }
  }
};
const addStyle = (data) => {
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (button.getAttribute("data-key") === data) {
      button.className = "key playing";
    }
  }
};
const removeStyle = (data) => {
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (button.getAttribute("data-key") === data) {
      button.className = "key";
    }
  }
};

document.addEventListener("keyup", userPress);
document.addEventListener("keydown", userRelease);
