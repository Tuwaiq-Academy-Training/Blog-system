import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const params = useParams();

  const id = params.id;

  useEffect(() => {
    const getBlog = async () => {
      const request = await fetch(`http://localhost:5000/api/v1/blogs/${id}`);
      const data = await request.json();
      setTitle(data.title);
      setDescription(data.description);
    };
    getBlog();
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center'>Add new Blog</h1>
      <div class='mt-3'>
        <div class='mb-3'>
          <label class='form-label'>Title</label>
          <input value={title} disabled type='text' class='form-control' />
        </div>
        <div class='mb-3'>
          <label class='form-label'>Description</label>
          <textarea
            value={description}
            disabled
            class='form-control'
            rows='5'
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
