function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.volume = 0.2;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

const userinput = document.getElementById("cords");
const playbutton = document.getElementById("play");

function playCords() {
  let cords = userinput.value;

  let cords_array = cords.split(" ");

  // console.log(cords);
  // console.log(cords_array);
  for (let i = 0; i <= cords_array.length; i++) {
    setTimeout(function () {
      let cor_ascii = cords_array[i].charCodeAt(0);

      function playSound(cor_ascii) {
        const audio = document.querySelector(`audio[data-key="${cor_ascii}"]`);
        const key = document.querySelector(`div[data-key="${cor_ascii}"]`);
        if (!audio) return;

        key.classList.add("playing");
        audio.currentTime = 0;
        audio.volume = 0.2;
        audio.play();
      }

      playSound(cor_ascii);
    }, i * 350);
  }
}

playbutton.addEventListener("click", playCords);
