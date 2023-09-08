import {useEffect} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"


export default function RedditVideo({width, height, HLSurl}){
    let styleWidth = "40rem";
    let styleHeight = "40rem";
    if(width){
        styleWidth = width;
    }
    if(height){
        styleHeight = height;
    }
    if(!HLSurl){
        console.error("Please specify a HLSurl parameter for your RedditVideo")
        return;
    }

    useEffect(() => {
        // In a non-React environment, use plain JavaScript to create and manipulate the DOM elements
        const container = document.createElement("div");
        container.style.marginTop = "1rem";

        const videoContainer = document.createElement("div");
        videoContainer.id = "videoContainer";
        videoContainer.className = "video-js";
        videoContainer.style.width = styleWidth;
        videoContainer.style.height = styleHeight;

        container.appendChild(videoContainer);

        // Call your video player initialization function here
        RedditVideoPlayer(HLSurl, "videoContainer");

        // Append the container to the document or a specific target element
        document.body.appendChild(container);
    }, []);

    return null;
}

function RedditVideoPlayer(HLSurl, containerId) {
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
}

