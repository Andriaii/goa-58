const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 1) Connect to MongoDB
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 2) Create a schema & model
const PostSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", PostSchema);

// 3) API routes
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

// 4) Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));