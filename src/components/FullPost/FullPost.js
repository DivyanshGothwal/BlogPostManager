import React, { PureComponent } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../Post/Post.css';
import './FullPost.css';

class FullPost extends PureComponent {
    state = {
        post: null
    }
    componentDidUpdate() {
        console.log('FullPost componentDidUpdate');
        console.log(this.props);
        this.loadData();
    }
    componentDidMount() {
        console.log('FullPost componentDidMount');
        console.log(this.props);
        this.loadData();
    }
    componentWillUnmount(){
        console.log('[FullPost.js] componentWillUnmount')
    }
    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.post || (parseInt(this.props.match.params.id) !== this.state.post.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then(value => {
                        let post = value.data;
                        this.setState({ post: post });
                    });
            }
        }
    }
    deletePostHandler = () => {
        console.log('delete called');
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.selectedPostId).then(e => {
            console.log(e);
        });
    };
    render() {
        console.log(this.props.match.params.id)
        let postvar = null;
        if (!this.props.match.params.id) {
            postvar = <p>Please Select a post to be displayed</p>
        }
        else if (!this.state.post) {
            postvar = <p>Loading.....</p>
        }
        else {
            postvar = (
                <div className="post fullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <NavLink to="/"><button onClick={this.props.deletePost}>Delete</button></NavLink>
                </div>
            );
        }
        return postvar;
    }
}

export default FullPost;