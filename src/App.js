import React, { useEffect, useState } from 'react';
import { Post, SearchBox } from './components';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setSearch('');
  }, []);
  const handleInput = event => {
    setSearch(event.target.value);
  };
  const searchPost = () => {
    fetch(
      `https://t6uyyfsdg7.execute-api.eu-central-1.amazonaws.com/dev/get-url?url=https://medium.com/eli5/a-modern-setup-for-digital-products-627e8c25efca%60&url=${search}?format=jason`,
      {
        headers: {
          'x-api-key': 'Vmlg5egOs04xE0KeiecGa2dKpEZek4KZ1kHpm0pm'
        }
      }
    )
      .then(response => response.json())
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  console.log('post', post);
  return (
    <div className="App">
      <SearchBox
        search={search}
        handleInput={handleInput}
        searchPost={searchPost}
      />
      <Post post={post} loading={loading} />
    </div>
  );
}

export default App;
