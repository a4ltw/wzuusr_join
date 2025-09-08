console.log("WZU USR script loaded.");

function zoomImage(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = img.src;
    lightbox.classList.add('visible');
}

function zoomImageOut() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('visible');
}

// YouTube Player API Logic
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'FhVxROgeMyQ',
        playerVars: {
            'playsinline': 1 // Important for mobile browsers
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-btn');
    if(playButton) {
        playButton.addEventListener('click', () => {
            if (player) {
                player.setPlaybackRate(1.5);
                player.playVideo();
                // Optional: hide the button after it's clicked
                playButton.style.display = 'none';
            }
        });
    }
});
