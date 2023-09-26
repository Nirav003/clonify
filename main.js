console.log("Welcome to Spotify");

// Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('mp3/Calypso.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songName');

let songs = [
    { songName: "Calypso", filePath: "mp3/Calypso.mp3", coverPath: "covers/Calypso.jpg" },
    { songName: "Cradless", filePath: "mp3/Cradless.mp3", coverPath: "covers/Cradles.png" },
    { songName: "Despacito", filePath: "mp3/Despacito.mp3", coverPath: "covers/Despacito.png" },
    { songName: "Fight Back", filePath: "mp3/Fight Back.mp3", coverPath: "covers/Fight Back.png" },
    { songName: "Greateful", filePath: "mp3/Grateful.mp3", coverPath: "covers/greateful.png" },
    { songName: "Kesariya", filePath: "mp3/Kesariya.mp3", coverPath: "covers/kesariya.jpg" },
    { songName: "Pasoori", filePath: "mp3/Pasoori.mp3", coverPath: "covers/pasoori.jpg" },
    { songName: "RangSari", filePath: "mp3/RangSari.mp3", coverPath: "covers/rangsari.jpg" },
    { songName: "Savage Love", filePath: "mp3/Savage Love.mp3", coverPath: "covers/savagelove.png" },
    { songName: "Stay", filePath: "mp3/Stay.mp3", coverPath: "covers/stay.png" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handel play/pause Click
masterPlay, addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})