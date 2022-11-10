const express = require('express');
const shortid = require('shortid');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const blogs = [];

// Create blog routes
app.get('/api/v1/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/api/v1/blogs/:id', (req, res) => {
  const id = req.params.id;
  const blog = blogs.find((blog) => blog.id === id);
  res.json(blog);
});

app.post('/api/v1/blogs', (req, res) => {
  const blog = req.body;
  blog.id = shortid.generate();
  blogs.push(blog);
  res.json({ message: 'Blog created', blog });
});

app.delete('/api/v1/blogs/:id', (req, res) => {
  blogs.filter((blog) => blog.id !== req.params.id);
  res.json({ message: 'Blog deleted' });
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
