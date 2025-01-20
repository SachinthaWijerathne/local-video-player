const Video = require("../models/videoModel");

const getVideos = async (req, res) => {
  try {
    const videos = await Video.getAllVideos(videopath);
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch videos", error: err });
  }
};

module.exports = {
  getVideos,
};
