import { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos);

export default function App() {
  const [videoSrc, setvideoSrc] = useState(videos.spider);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setvideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>Project 6 : video player</h1>
      <Menu
        key={videoSrc}
        onSelectVideo={onSelectVideo}
        videoValues={videoNames}
      />
      <Video videoSrc={videoSrc} />
    </div>
  );
}
