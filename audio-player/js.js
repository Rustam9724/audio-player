const audio = document.querySelector('audio');
const playButton = document.querySelector('#playbutton');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const cover = document.querySelector('#cover');
const author = document.querySelector('#audio-name h4');
const title = document.querySelector('#audio-name p');
const timeline = document.querySelector('#timeline');
const audioDuration = document.querySelector('#duration');
let isPlay = false;
let playNum = 0;

const playList = [
    {
        author: 'Beyonce',
        title: "Don't Hurt Yourself",
        src: 'assets/audio/beyonce.mp3',
        image: 'assets/images/Beyonce.jpg',
        duration: '03:53'
    },
    {
        author: 'Баста',
        title: 'Калифорния',
        src: 'assets/audio/Баста-Калифорния.mp3',
        image: 'assets/images/Баста.jpg',
        duration: '04:48',
    },
    {
        author: 'MiyaGi',
        title: 'Там где рассвет',
        src: 'assets/audio/MiyaGi  & Эндшпиль - Там где рассвет.mp3',
        image: 'assets/images/MiyaGi.jpg',
        duration: '03:37',
    },
    {
        author: 'Indila',
        title: 'Derniere danse',
        src: 'assets/audio/Indila - Derniere Dance.mp3',
        image: 'assets/images/Indila.jfif',
        duration: '03:34',
    },
    {
        author: 'The lively ones',
        title: 'Surf rider',
        src: 'assets/audio/The lively ones - Surg rider.mp3',
        image: 'assets/images/Lively.jpg',
        duration: '03:19'
    }
]

function audioPlay() {
    if (!isPlay) {
        audio.play(); 
        playButton.firstElementChild.src = 'assets/svg/pause.svg'; 
        isPlay = true;
    } else {
        audio.pause();
        playButton.firstElementChild.src = 'assets/svg/play.svg';;
        isPlay = false;
    }
        
}

function nextAudio() {
if (playNum != 4) {
        playNum += 1;
    } else {
        playNum = 0;
    }
    audio.src = playList[playNum].src;
    cover.style.backgroundImage = `url('${playList[playNum].image}')`;
    author.textContent = playList[playNum].author;
    title.textContent = playList[playNum].title;
    audioDuration.textContent = playList[playNum].duration;
    if (isPlay == true) {
        audio.play();
    } else {
        audio.pause();
    }
}

function prevAudio() {
    if (playNum != 0) {
        playNum -= 1;
    } else {
        playNum = 4;
    }
    audio.src = playList[playNum].src;
    cover.style.backgroundImage = `url('${playList[playNum].image}')`,
    author.textContent = playList[playNum].author;
    title.textContent = playList[playNum].title;
    audioDuration.textContent = playList[playNum].duration;
    if (isPlay == true) {
        audio.play();
    } else {
        audio.pause();
    }
}

playButton.addEventListener('click', audioPlay);
nextButton.addEventListener('click', nextAudio);
prevButton.addEventListener('click', prevAudio);

setInterval(() => {
    const progressBar = document.querySelector('#progress');
    progressBar.value = audio.currentTime / audio.duration * 100;
    progressBar.style.background = `linear-gradient(to right, #c2ff01 0%, #c2ff01 ${progressBar.value}%, white ${progressBar.value}%, white 100%)`;
}, 500);


const progressBar = document.querySelector('#progress');
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value / 100 * audio.duration;
})

setInterval(() => {
    const curTime = document.querySelector('#current-time');
    if (Math.floor(audio.currentTime) < 10) {
        curTime.textContent = '0' + Math.floor(audio.currentTime/60) + ':0' + Math.floor(audio.currentTime % 60);
    } else curTime.textContent = '0' + Math.floor(audio.currentTime/60) + ':' + Math.floor(audio.currentTime % 60);
}, 500);