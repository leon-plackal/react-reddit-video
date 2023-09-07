import videojs from "video.js";
import "video.js/dist/video-js.css"

/**
 * Initialize a Video.js player with a Reddit HLS URL and render it inside a specified container.
 * @param {string} HLSurl - URL of the HLS stream.
 * @param {string} containerId - ID of the container element where the player should be rendered.
 */
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