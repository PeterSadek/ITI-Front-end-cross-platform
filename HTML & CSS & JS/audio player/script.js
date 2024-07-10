let yourPowerItem = document.getElementById("yourPowerItem");
let makeAShadowItem = document.getElementById("makeAShadowItem");
let iFallApartItem = document.getElementById("iFallApartItem");
let everybodyKnowsItem = document.getElementById("everybodyKnowsItem");

let songs = document.querySelectorAll("audio");

let cover = document.getElementById("coverImage");
let audio = document.getElementById("mainAudio");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let reset = document.getElementById("stop");
let mute = document.getElementById("mute");

let time = document.getElementById("time");
let volume = document.getElementById("volume");

let coverSrc = [
  "./audio/covers/your-power-cover.png",
  "./audio/covers/make-a-shadow-cover.jpg",
  "./audio/covers/i-fall-apart-cover.png",
  "./audio/covers/everybody-knows-cover.png",
];

let audioSrc = [
  "./audio/Billie Eilish - Your Power.mp3",
  "./audio/Meg Myers - Make a Shadow.mp3",
  "./audio/Post Malone - I Fall Apart.mp3",
  "./audio/Sigrid - Evereybody Knows.mp3",
];

////sliders
function getDuration(song) {
  time.max = song.duration;
}
audio.ontimeupdate = function () {
  time.value = audio.currentTime;
};
// audio.onloadedmetadata = function() {
//   audio.currentTime = time.value;
// }
time.oninput = function () {
  audio.currentTime = time.value;
};

volume.oninput = function () {
  audio.volume = this.value;
};

////buttons
play.onclick = function () {
  audio.play();
};

pause.onclick = function () {
  audio.pause();
};

reset.onclick = function () {
  audio.pause();
  audio.currentTime = 0;
};

mute.onclick = function () {
  audio.muted = !audio.muted;
};

////songs
yourPowerItem.onclick = function () {
  audio.src = audioSrc[0];
  audio.play();
  cover.src = coverSrc[0];
  getDuration(songs[1]);
};

makeAShadowItem.onclick = function () {
  audio.src = audioSrc[1];
  audio.play();
  cover.src = coverSrc[1];
  time.max = audio.duration;
  getDuration(songs[2]);
};

iFallApartItem.onclick = function () {
  audio.src = audioSrc[2];
  audio.play();
  cover.src = coverSrc[2];
  time.max = audio.duration;
  getDuration(songs[3]);
};

everybodyKnowsItem.onclick = function () {
  audio.src = audioSrc[3];
  audio.play();
  cover.src = coverSrc[3];
  time.max = audio.duration;
  getDuration(songs[4]);
};
