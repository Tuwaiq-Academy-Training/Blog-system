import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  const onClick = () => {
    navigate('/add');
  };

  useEffect(() => {
    const getBlogsFirstTime = async () => {
      const request = await fetch('http://localhost:5000/api/v1/blogs');
      const data = await request.json();
      setBlogs(data);
      console.log('data', data);
    };
    getBlogsFirstTime();
  }, []);

  return (
    <div className='container'>
      <h1 className='mt-5 text-center'>Blog System</h1>
      <ul class='list-group mt-3'>
        {blogs.map((blog) => {
          return (
            <li class='list-group-item '>
              <Link to={'/blog/' + blog.id}>{blog.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={onClick}
        type='button'
        class='btn btn-success mt-2 w-100'
      >
        Add new Blog
      </button>
    </div>
  );
};

export default Home;
