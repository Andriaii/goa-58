const express = require('express');
const app = express();
app.use(express.json());

let posts = [];
let nextPostId = 1;

app.post('/posts', (req, res) => {
    const { title, author, description } = req.body;
    if (!title || !author || !description) return res.status(400).json({ message: 'All fields are required' });
    const newPost = { id: nextPostId++, title, author, description, comments: [] };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.get('/posts', (req, res) => res.json(posts));

app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
});

app.patch('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    const { title, author, description } = req.body;
    if (title) post.title = title;
    if (author) post.author = author;
    if (description) post.description = description;
    res.json(post);
});

app.delete('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Post not found' });
    const deleted = posts.splice(index, 1);
    res.json({ message: 'Post deleted', post: deleted[0] });
});

app.get('/users/:author/posts', (req, res) => {
    const author = req.params.author;
    const userPosts = posts.filter(p => p.author === author);
    res.json(userPosts);
});

app.post('/posts/:id/comments', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    const { comment } = req.body;
    if (!comment) return res.status(400).json({ message: 'Comment is required' });
    post.comments.push(comment);
    res.json(post);
});

app.listen(3000, () => console.log('Server running on port 3000'));
