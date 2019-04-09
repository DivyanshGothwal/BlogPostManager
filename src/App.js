import React, { Component } from 'react';
import Post from './components/Post/Post';
// import AsyncNewPost from './container/NewPost/NewPost';
import axios from './axios';
import Posts from './container/Posts/Posts';
import './App.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';
const AsyncNewPost = asyncComponent(()=>{
  return import('./container/NewPost/NewPost');//Promise.resolve();
});

class App extends Component {
  state={
    auth:true
  }
  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount')
}
componentDidMount(){
  console.log('[App.js] componentDidMount')
} 
  postDeleteHandler = (index) => {
    if (index < 0) {
      return;
    }
    const postsArray = this.state.posts;
    postsArray.splice(index, 1);
    this.setState({ posts: postsArray, selectedPostId: null });
  }
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="divyansh">Posts</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?search-param=true'
                }}
                  exact
                  activeClassName="divyansh">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/posts" component={Posts} />
          {this.state.auth?<Route path="/new-post" exact render={() => <AsyncNewPost />} />:null}
          <Route path="/" >
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
