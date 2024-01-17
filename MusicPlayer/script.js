let musicas = [

    { index: '1', titulo: 'Confortable', artista: 'Victor Ray', src: 'musicas/Confortable.mp3', img: 'assets/trend.png' },

    { index: '2', titulo: 'Dont Wanna Know - Piano Version', artista: 'Natalie Layne', src: 'musicas/dontwannaknow.mp3', img: 'assets/song-1.png' },

    { index: '3', titulo: 'Grateful For - Piano Version', artista: 'Natalie Layne', src: 'musicas/GratefulFor.mp3', img: 'assets/song-2.png' },

    { index: '4', titulo: 'Vanish', artista: 'Giveon', src: 'musicas/Vanish.mp3', img: 'assets/song-3.png' },

    { index: '5', titulo: 'Superpower', artista: 'Daniel Caeser', src: 'musicas/Superpowers.mp3', img: 'assets/song-4.jpg' }

]


let musica = document.querySelector('audio');
let musicaIndex = 0

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.song-info-imagem');
let nomeMusica = document.querySelector('.description h3');
let nomeArtista = document.querySelector('.description h5');
let tempoDecorrido = document.querySelector('.tempo .inicio');

renderizarMusicas(musicaIndex);

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
document.querySelector('.play-button').addEventListener('click', tocarMusicas);
document.querySelector('.bx-pause').addEventListener('click', pausarMusicas);
document.querySelector('.listen-now').addEventListener('click', tocarMusicas);
document.querySelector('.music1').addEventListener('click', tocarMusicas);
document.querySelector('.music2').addEventListener('click', tocarMusicas);
document.querySelector('.music3').addEventListener('click', tocarMusicas);
document.querySelector('.music4').addEventListener('click', tocarMusicas);

musica.addEventListener('timeupdate', atualizarBarra)
imagem.setAttribute('src', musicas[musicaIndex].img);

document.querySelector('.bx-first-page').addEventListener('click', () => {
    musicaIndex--;
    renderizarMusicas(musicaIndex);
});

document.querySelector('.bx-last-page').addEventListener('click', () => {
    musicaIndex++;
    renderizarMusicas(musicaIndex);
});

function tocarMusicas() {
    musica.play();
    document.querySelector('.play-button').style.display = 'none';
    document.querySelector('.bx-pause').style.display = 'block';
}

function pausarMusicas() {
    musica.pause();
    document.querySelector('.play-button').style.display = 'block';
    document.querySelector('.bx-pause').style.display = 'none';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}

function renderizarMusicas() {
    musica.setAttribute('src', musicas[musicaIndex].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

let audio = new Audio("musicas/dontwannaknow.mp3");

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
});


