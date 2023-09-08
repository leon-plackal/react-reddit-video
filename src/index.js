import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

/**
 * RedditVideo component displays a video using the Video.js player.
 *
 * @param {string} HLSurl - The HLS URL of the video.
 * @param {string} width - The width of the video container (default: "30rem").
 * @param {string} height - The height of the video container (default: "30rem").
 * @returns {null} - This component doesn't render any JSX elements directly.
 */
function RedditVideo({ HLSurl, width = "30rem", height = "30rem" }) {
    // Validate HLSurl
    if (typeof HLSurl !== "string" || HLSurl.trim() === "") {
        console.error("Please specify a non-empty HLSurl parameter for your RedditVideo");
        return null;
    }

    // Use a ref to store the container element
    const containerRef = useRef(null);

    useEffect(() => {
        // Generate a unique container ID
        const containerId = `videoContainer_${Date.now()}`;

        // Create a container element with the unique ID
        const container = document.createElement("div");
        container.style.marginTop = "1rem";
        container.id = containerId;
        container.className = "video-container video-js"; // Add a CSS class for styling

        // Set the width and height
        container.style.width = width;
        container.style.height = height;

        // Store the container element in the ref
        containerRef.current = container;

        // Append the container to the document or a specific target element
        document.body.appendChild(container);

        // Call the video player initialization function with the container element
        RedditVideoPlayer(HLSurl, container);

        // Cleanup: Remove the container when the component unmounts
        return () => {
            if (containerRef.current) {
                containerRef.current.remove();
            }
        };
    }, [HLSurl, width, height]);

    return null;
}

/**
 * Initializes the Video.js player with the provided HLS URL and container.
 *
 * @param {string} HLSurl - The HLS URL of the video.
 * @param {HTMLElement} container - The container element for the video player.
 */
function RedditVideoPlayer(HLSurl, container) {
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
}

export default RedditVideo;
