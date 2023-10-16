const select = document.querySelector(".logo");
const dialog = document.querySelector("dialog");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const selection = document.querySelector("select");
const icon = document.querySelector(".icon");
const audio = document.querySelector("audio");
const source = document.querySelector("source");
const playing = document.querySelector(".playing");
let song = 1;

select.addEventListener("click", () => {
  dialog.showModal();
});

close.addEventListener("click", () => {
  dialog.close();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
  song = e.target.form[0].value;
  if (!audio.paused) {
    audio.pause();
    icon.src = "./375.png";
  }
  changeSong(song);
});

icon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.src = "./video-pause-button.png";
  } else {
    audio.pause();
    icon.src = "./375.png";
  }
});

function changeSong(song) {
  if (song == 1) {
    source.src = "./songs/Stupid.mp3";
    playing.textContent = "Now Playing: Stupid - Deb Never";
  } else if (song == 2) {
    source.src = "./songs/Sorry.mp3";
    playing.textContent = "Now Playing: Sorry - Deb Never";
  } else if (song == 3) {
    source.src = "./songs/Someone Else.mp3";
    playing.textContent = "Now Playing: Someone Else - Deb Never";
  } else if (song == 4) {
    source.src = "./songs/Disassociate.mp3";
    playing.textContent = "Now Playing: Disassociate - Deb Never";
  } else if (song == 5) {
    source.src = "./songs/Sweet & Spice.mp3";
    playing.textContent = "Now Playing: Sweet & Spice - Deb Never";
  } else if (song == 6) {
    source.src = "./songs/Funky.mp3";
    playing.textContent = "Now Playing: Funky - Deb Never";
  } else if (song == 7) {
    source.src = "./songs/Coca Cola.mp3";
    playing.textContent = "Now Playing: Coca Cola - Deb Never";
  } else if (song == 8) {
    source.src = "./songs/Red Eye.mp3";
    playing.textContent = "Now Playing: Red Eye - Deb Never";
  }
  audio.load();
}
