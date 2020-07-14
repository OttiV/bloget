import React, { useState } from 'react';
import { Post, SearchBox } from './components';
import { url, xApiKey } from './constants';
import './App.css';

function App() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState('');
  const [searchError, setSearchError] = useState('');

  const validate = () => {
    let searchError = '';
    if (!search.includes('http' && '://' && '.')) {
      searchError = 'invalid url';
    }
    if (searchError) {
      setSearchError(searchError);
      return false;
    }
    return true;
  };

  const handleInput = event => {
    event.preventDefault();
    setSearch(event.target.value);
    setSearchError('');
  };

  const handleSubmit = () => {
    setPost([]);
    setError('');
    setLoading(true);
    fetch(`${url}${search}`, {
      headers: {
        'x-api-key': xApiKey
      }
    })
      .then(response => response.json())
      .then(res => {
        if (res.message) {
          setError(res.message);
        } else {
          setPost(res.data);
          setLoading(false);
        }
        validate();
      });
  };

  return (
    <div className="App">
      <SearchBox
        search={search}
        searchError={searchError}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />

      {error ? (
        <div className="error">Sorry! {error}</div>
      ) : (
        <Post post={post} loading={loading} />
      )}
    </div>
  );
}

export default App;
