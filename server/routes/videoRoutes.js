const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

// GET /api/videos - List all videos
router.get("/", videoController.getVideos);

module.exports = router;
