# react-reddit-video

`react-reddit-video` is a React component that allows you to easily embed Reddit videos in your web application. It uses the Video.js player to provide a video playback experience.

## Installation

You can install the package using npm or yarn:
```bash
npm install react-reddit-video
```

## Usage
- Please note: the it is assumed that you are using the reddit API to retrieve your posts with videos, and therefore you should be able to retrieve the 'hls_url' field from the API response.
- Since the reddit API does not provide any direct mp4 url with audio to act as a source within a Video tag for instance, this component is able to retrievea nd combine the video with audio from the hls_url, with the help of video.js


```javascript
import RedditVideo from "react-reddit-video";
```

```HTML
    <div>
      <h1>Reddit Video Player Example</h1>
      <RedditVideo HLSurl="YOUR_REDDIT_VIDEO_URL" width="640px" height="360px" />
    </div>
```
