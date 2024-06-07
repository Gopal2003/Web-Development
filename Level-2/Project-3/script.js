var arr = [
  { songName: "jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
  {
    songName: "Ram Siya Ram",
    url: "./songs/Ram Siya Ram.mp3",
    img: "./images/ram.jpg",
  },
  {
    songName: "Pehle bhi main",
    url: "./songs/Pehle Bhi Main.mp3",
    img: "./images/animal.jpg",
  },
  {
    songName: "Arjan Vaily Ne",
    url: "./songs/Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
];

var allSongs = document.querySelector("#all-songs");
var audio = new Audio();
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var selectedSong = 0;

function mainFunction() {
  var clutter = "";
  arr.forEach(function (obj, index) {
    clutter =
      clutter +
      `<div class="song-card" id=${index}>
                        <div class="part1">
                            <img src="${obj.img}" alt="">
                            <h2>${obj.songName}</h2>    
                        </div>
                        <h6>3:56</h6>
                    </div>`;
  });
  allSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

allSongs.addEventListener("click", function (details) {
  selectedSong = details.target.id;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  flag = 1;
  mainFunction();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    // mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    // mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong = selectedSong + 1;
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong = selectedSong - 1;
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  }
});
