import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts[parseInt(id)];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-details-container">
      <h1 className="blog-title">{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} className='blog-image-detail' />}
      <p className="blog-content">{post.content}</p>
      <p className="blog-date">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <Link to="/" className='back-button'>Back to posts</Link>
    </div>
  );
};

export default BlogPostDetails;
