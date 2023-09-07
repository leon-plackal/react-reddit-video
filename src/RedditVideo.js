import videojs from "video.js";
import "video.js/dist/video-js.css"

export function RedditVideoPlayer(HLSurl, containerId) {
    // Find the container element by its ID
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    } else {
        container.innerHTML = "";
    }

    // Create a video element
    const videoElement = document.createElement("video");
    container.appendChild(videoElement);

    // Initialize the Video.js player
    const options = {
        fill: true,
        fluid: true,
        autoplay: false,
        controls: true,
        preload: "metadata",
        sources: [
            {
                src: HLSurl,
                type: "application/x-mpegURL",
            },
        ],
    };

    const player = videojs(videoElement, options);

    // Optionally, you can add event listeners or perform other actions with the player here
}