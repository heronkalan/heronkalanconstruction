// src/components/VideoPlayer.js
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src }) => {
  const containerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlaying(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={styles.container}>
      <ReactPlayer
        url={src}
        playing={isPlaying}
        controls
        muted
        width="100%"
        height="100%"
        style={styles.player}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "300px",  // Fixed width for square video
    height: "300px", // Matching height to make it square
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  player: {
    borderRadius: "10px", // Rounded corners like Instagram
  },
};

export default VideoPlayer;
