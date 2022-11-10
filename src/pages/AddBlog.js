import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const addNewBlog = async (e) => {
    const request = await fetch('http://localhost:5000/api/v1/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
    const data = await request.json();

    navigate('/');
  };
  return (
    <div className='container'>
      <h1 className='text-center'>Add new Blog</h1>
      <div class='mt-3'>
        <div class='mb-3'>
          <label class='form-label'>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='email'
            class='form-control'
            placeholder='Enter title'
          />
        </div>
        <div class='mb-3'>
          <label class='form-label'>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter description'
            class='form-control'
            rows='5'
          />
        </div>
        <button
          onClick={addNewBlog}
          type='button'
          class='btn btn-primary w-100'
        >
          Add new Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
