// src/components/VideoFeed.js
import React from "react";
import VideoPlayer from "./VideoPlayer";

const videoSources = [
    "https://vimeo.com/1024618710",
    "https://vimeo.com/1024620665",
    "https://vimeo.com/1024620657",
    "https://vimeo.com/1024620648",
    "https://vimeo.com/1024618716",
    "https://vimeo.com/1024618707",
    "https://vimeo.com/1024618697",
    "https://vimeo.com/1024618695",
    "https://vimeo.com/1024618684",
    "https://vimeo.com/1024618678",
    "https://vimeo.com/1024618674",
    "https://vimeo.com/1024618669",
    "https://vimeo.com/1024618664",
    "https://vimeo.com/1024618657",
    "https://vimeo.com/1024618655",
    "https://vimeo.com/1024618646",
    "https://vimeo.com/1024618638",
    "https://vimeo.com/1024618628"
    // Add more video URLs as needed
  ];

const VideoFeed = () => {
  return (
    <div style={styles.videoFeedContainer}>
      {videoSources.map((src, index) => (
        <VideoPlayer key={index} src={src} />
      ))}
    </div>
  );
};

const styles = {
  videoFeedContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2px", // Adjust spacing between videos
  },
};

export default VideoFeed;
