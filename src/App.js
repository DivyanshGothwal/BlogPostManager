import React, { Component } from 'react';
import Post from './components/Post/Post';
import FullPost from './components/FullPost/FullPost';
import NewPost from './container/NewPost/NewPost';
import axios from 'axios';
import './App.css';


class App extends Component {
  state={
    posts:[],
    selectedPostId:null
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(value => {
      console.log(value);
      this.setState({posts:value.data});
    })
  }
  postClickedHandler = (index) =>{
    this.setState({selectedPostId:index+1});
  }
  postDeleteHandler = (index) =>{
    if(index<0){
      return;
    }
    const postsArray = this.state.posts;
    postsArray.splice(index,1);
    this.setState({posts:postsArray,selectedPostId:null});

  }
  render() {

    const postsArray = this.state.posts;
    let posts = postsArray.map((eachPost,index) => {
      return <Post clicked={()=>{this.postClickedHandler(index)}} key={index} author={index} title={eachPost.title}/>
    })
    return (
      <div className="App">
        <header className="header section">
          {posts}
        </header>
        <section className="section">
          <FullPost selectedPostId= {this.state.selectedPostId} deletePost={()=>{this.postDeleteHandler(this.state.selectedPostId)}}/>
        </section>
        <section className="section">
          <NewPost />
        </section>
      </div>
    );
  }
}

export default App;
