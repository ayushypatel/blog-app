import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post, index }) => {
    console.log(post,'dfdgdfgdfgdfg');
  return (
    <div className='blog-list-item'>
      <Link to={`/post/${index}`} className='blog-link'>
        {post.urlToImage && <img src={post.urlToImage} alt={post.title} className='blog-image' />}
        <div className='blog-content'>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p><span className='published'>Publised At : </span>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostItem;
