window.addEventListener("keydown", function (letterPlay) {
  const audio = document.querySelector(
    `audio[data-key="${letterPlay.keyCode}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});

const pianoKey = document.querySelectorAll(".piano-key");
for (pianoKeyItem of pianoKey) {
  pianoKeyItem.onclick = function () {
    let note = this.dataset.note;
    const audio = document.querySelectorAll("audio");
    for (audioItem of audio) {
      if (audioItem.dataset.note == note) {
        audioItem.currentTime = 0;
        audioItem.play();
      }
    }
  };
}

const btnNotes = document.querySelector(".btn-container");
let letters = document.querySelectorAll(".li.letters");

btnNotes.addEventListener("click", (e) => {
  const chord = e.target.innerText;
  e.target.innerText = chord === "Notes" ? "Letters" : "Notes";
});

let full = document.querySelector(".fullscreen");
full.addEventListener("click", function (e) {
  document.documentElement.requestFullscreen();
});
