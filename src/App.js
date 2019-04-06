import React, { Component } from 'react';
import Post from './components/Post/Post';
import FullPost from './components/FullPost/FullPost';
import NewPost from './container/NewPost/NewPost';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header section">
          <Post />
          <Post />
          <Post />
        </header>
        <section className="section">
          <FullPost />
        </section>
        <section className="section">
          <NewPost />
        </section>
      </div>
    );
  }
}

export default App;
