import {useEffect} from "react";
import {RedditVideoPlayer} from "./index";

export default function RedditVideo({width, height, HLSurl}){
    let styleWidth = "40rem";
    let styleHeight = "40rem";
    if(width){
        styleWidth = width;
    }
    if(height){
        styleHeight = height;
    }
    useEffect(() => {
        RedditVideoPlayer(HLSurl, "videoContainer");
    }, []);
    return(
            <div style={{marginTop: "1rem"}}>
                <div id="videoContainer" className="video-js" style={{width: `${styleWidth}`, height:`${styleHeight}` }}></div>
            </div>
    )
}