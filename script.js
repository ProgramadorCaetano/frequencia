const playlist = [
  { title: "Musicas_bloco5-1", file: "audios/Musicas_bloco5-1.mp3" },
  { title: "Musicas_bloco5-2", file: "audios/Musicas_bloco5-2.mp3" },
  { title: "Musicas_bloco5-3", file: "audios/Musicas_bloco5-3.mp3" },
  { title: "Musicas_bloco5-4", file: "audios/Musicas_bloco5-4.mp3" },

  { title: "Progama17_All", file: "audios/Progama17_All.mp3" }
];

let currentTrack = 0;
const player = document.getElementById("audio-player");
const titleDisplay = document.getElementById("track-title");

function loadTrack(index) {
  player.src = playlist[index].file;
  titleDisplay.textContent = "Tocando agora: " + playlist[index].title;
  player.play().catch(() => {
    titleDisplay.textContent = "Clique em Play para iniciar: " + playlist[index].title;
  });
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
}

// Passa automaticamente para o próximo áudio quando o atual termina
player.addEventListener("ended", nextTrack);

// Inicia na primeira faixa
loadTrack(currentTrack);
