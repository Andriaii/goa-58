const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let posts = [];
let nextUserId = 1;
let nextPostId = 1;

app.post('/users/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'Username and password are required' });
    const newUser = { id: nextUserId++, username, password };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', user });
});

app.patch('/users/:id/password', (req, res) => {
    const id = parseInt(req.params.id);
    const { newPassword } = req.body;
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (!newPassword) return res.status(400).json({ message: 'New password required' });
    user.password = newPassword;
    res.json({ message: 'Password updated successfully', user });
});

app.get('/users', (req, res) => res.json(users));

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

app.post('/posts', (req, res) => {
    const { title, content, authorId } = req.body;
    if (!title || !content || !authorId) return res.status(400).json({ message: 'All fields are required' });
    const newPost = { id: nextPostId++, title, content, authorId };
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
    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    res.json(post);
});

app.delete('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Post not found' });
    const deleted = posts.splice(index, 1);
    res.json({ message: 'Post deleted', post: deleted[0] });
});

app.listen(3000, () => console.log('Server running on port 3000'));
