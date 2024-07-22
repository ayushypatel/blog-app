import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from './BlogPostItem';
import { PuffLoader } from 'react-spinners';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loader, setLoader] = useState(false);
  const pageSize = 10; // Number of posts per page

  useEffect(() => {
    setLoader(true);
    axios.get(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=39945a252ad74448a22e063b55e27d1b&page=${page}&pageSize=${pageSize}`
    )
      .then(response => {
        setPosts(response.data.articles);
        setTotalResults(response.data.totalResults);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  }, [page]);

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div className="blog-list-container">
      {loader ? (
        <div className="loader-container">
       <PuffLoader color="#55379d" />
        </div>
      ) : (
        <>
          {posts.map((post, index) => (
            <BlogPostItem key={index} post={post} index={index} />
          ))}
          <div className="pagination-buttons">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPostList;
