import React, { useState, useEffect, useRef } from "react";
import { Box, List, ListItem, ListItemText, Typography, Divider } from "@mui/material";

const VideoPlayerApp = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null); // Ref to control the video element

  // Fetch video list from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((res) => res.json())
      .then(setVideos)
      .catch(console.error);
  }, []);

  // Play video whenever `selectedVideo` changes
  useEffect(() => {
    if (videoRef.current && selectedVideo) {
      videoRef.current.load(); // Load the new video
      videoRef.current.play(); // Automatically start playing
    }
  }, [selectedVideo]);

  return (
    <Box display="flex" height="100vh" padding={2}>
      {/* Left side: Video Player */}
      <Box flex={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        {selectedVideo ? (
          <>
            <Typography variant="h6" gutterBottom>
              Now Playing: {selectedVideo.name}
            </Typography>
            <video
              ref={videoRef}
              width="600"
              height="500"
              controls
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            >
              <source src={`http://localhost:5000${selectedVideo.path}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <Typography variant="h6">Select a video to play</Typography>
        )}
      </Box>

      <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

      {/* Right side: Video List */}
      <Box flex={2} overflow="auto">
        <Typography variant="h6" gutterBottom>
          Video List
        </Typography>
        <List>
          {videos.map((video, index) => (
            <ListItem
              key={index}
              button
              onClick={() => setSelectedVideo(video)} // Update the selected video
              sx={{
                backgroundColor: selectedVideo?.path === video.path ? "#f0f0f0" : "transparent",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
            >
              <ListItemText primary={video.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default VideoPlayerApp;
