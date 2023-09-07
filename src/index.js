import videojs from "video.js";
import "video.js/dist/video-js.css";

/**
 * Initialize a Video.js player with a Reddit HLS URL.
 * @param {string} containerId - The ID of the container element where the video player should be placed.
 * @param {string} redditUrl - The Reddit HLS URL to play.
 * @returns {Object} - Returns the Video.js player instance.
 */
export function initializeRedditVideoPlayer(containerId, redditUrl) {
    const container = document.getElementById(containerId);

    if (!container) {
        throw new Error(`Element with ID '${containerId}' not found.`);
    }

    const options = {
        fill: true,
        fluid: true,
        autoplay: false,
        controls: true,
        preload: "metadata",
        sources: [
            {
                src: redditUrl,
                type: "application/x-mpegURL",
            },
        ],
    };

    const player = videojs(container, options);

    // Dispose the player when needed
    return player;
}
