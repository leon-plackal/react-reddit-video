import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import videojs from "video.js";
import "video.js/dist/video-js.css";

/**
 * RedditVideo component for embedding Reddit videos.
 * @param {Object} props - Component props.
 * @param {string} props.HLSurl - The URL of the Reddit video in HLS format.
 * @param {string} [props.width="30rem"] - The width of the video container (CSS value).
 * @param {string} [props.height="30rem"] - The height of the video container (CSS value).
 * @returns {null} Returns null as this component doesn't render any visible content.
 */
function RedditVideo({ HLSurl, width = "30rem", height = "30rem" }) {
    // Validate HLSurl
    if (!HLSurl) {
        console.error("Please specify an HLSurl parameter for your RedditVideo");
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

        // Call your video player initialization function with the container element
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
 * Initializes the Video.js player inside the given container.
 * @param {string} HLSurl - The URL of the Reddit video in HLS format.
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

RedditVideo.propTypes = {
    HLSurl: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default RedditVideo;
