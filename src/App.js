import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=39945a252ad74448a22e063b55e27d1b&pageSize=100`)
      .then(response => {
        setPosts(response.data.articles);
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails posts={posts}/>} />
      </Routes>
    </Router>
  );
}

export default App;
