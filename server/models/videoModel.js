const fs = require("fs");
const path = require("path");

// Point to the custom directory
const videosPath = "D:/VIDEOS";

const Video = {
  getAllVideos: (videopath) => {
    return new Promise((resolve, reject) => {
      fs.readdir(videosPath, (err, files) => {
        if (err) reject("Error reading videos directory");
        else {
          const videoList = files.map((file) => ({
            name: file,
            path: `/videos/${file}`,
          }));
          resolve(videoList);
        }
      });
    });
  },
};

module.exports = Video;
