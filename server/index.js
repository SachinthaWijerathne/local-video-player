const express = require("express");
const cors = require("cors");

const videoRoutes = require("./routes/videoRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the custom directory
app.use("/videos", express.static("D:/VIDEOS"));

// API Routes
app.use("/api/videos", videoRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
