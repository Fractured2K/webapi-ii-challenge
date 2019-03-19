const express = require("express");
const cors = require("cors");

// Routes
const postRoutes = require("./routes/posts");

const server = express();

// Middleware
server.use(express.json()); // parse incoming json
server.use(cors()); // allow cors

// Catch incoming requests to routes
server.use("/api/posts/", postRoutes);

server.listen(3001, () => {
	console.log(`Server running on http://localhost:30001`);
});
