import React, { PureComponent } from 'react';
import axios from 'axios';
import '../Post/Post.css';
import './FullPost.css'

class FullPost extends PureComponent {
    state = {
        post: null
    }
    componentDidUpdate() {
        console.log('FullPost componentDidUpdate');
        if (this.props.selectedPostId) {
            if (!this.state.post || (this.state.post  && this.props.selectedPostId !== this.state.post.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.selectedPostId)
                    .then(value => {
                        let post = value.data;
                        this.setState({ post: post });
                    });
            }
        }
    }
    deletePostHandler= ()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+ this.props.selectedPostId).then(e=>{
            console.log(e);
        });
    };
    render() {
        let post = null;
        if (!this.props.selectedPostId) {
            post = <p>Please Select a post to be displayed</p>
        }
        else if (!this.state.post) {
            post = <p>Loading</p>
        }
        else {
            post = (
                <div className="post fullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <button onClick={this.props.deletePost}>Delete</button>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;