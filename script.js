console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('mp3/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Calypso", filePath: "mp3/1.mp3", coverPath: "covers/Calypso.jpg" },
    { songName: "Cradless", filePath: "mp3/2.mp3", coverPath: "covers/Cradles.png" },
    { songName: "Despacito", filePath: "mp3/3.mp3", coverPath: "covers/Despacito.png" },
    { songName: "Fight Back", filePath: "mp3/4.mp3", coverPath: "covers/Fight Back.png" },
    { songName: "Greateful", filePath: "mp3/5.mp3", coverPath: "covers/greateful.png" },
    { songName: "Kesariya", filePath: "mp3/6.mp3", coverPath: "covers/kesariya.jpg" },
    { songName: "Pasoori", filePath: "mp3/7.mp3", coverPath: "covers/pasoori.jpg" },
    { songName: "RangSari", filePath: "mp3/8.mp3", coverPath: "covers/rangsari.jpg" },
    { songName: "Savage Love", filePath: "mp3/9.mp3", coverPath: "covers/savagelove.png" },
    { songName: "Stay", filePath: "mp3/10.mp3", coverPath: "covers/stay.png" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `mp3/${songIndex + 1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currenrTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `mp3/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currenrTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `mp3/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currenrTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})