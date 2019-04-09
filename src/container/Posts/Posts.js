import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import { Route} from 'react-router-dom';
import axios from '../../axios';
import '../../App.css'

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        console.log('[Posts.js] componentDidMount')
        axios.get('').then(value => {
            console.log(value);
            this.setState({ posts: value.data });
        })
            .catch(error => {
                console.log("div "+error);
                //this.setState({error:true});
            });
    }
    postClickedHandler =  (index) => {
        this.props.history.push({ pathname: this.props.match.url+'/' + (index + 1) });
    }
    componentWillUnmount(){
        console.log('[Posts.js] componentWillUnmount')
    }
    render() {
        const postsArray = this.state.posts;
        let posts = <p>Opps something went wrong!</p>;
        if (!this.state.error) {
            posts = postsArray.map((eachPost, index) => {
                return <Post clicked={() => { this.postClickedHandler(index) }} key={index} author={index + 1} title={eachPost.title} />
            });
        }
        return (
            <div>
                <section className="header section">
                    {posts}
                </section>
                <Route path={this.props.match.url+"/:id"} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;