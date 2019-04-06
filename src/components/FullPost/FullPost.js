import React from 'react';
import '../Post/Post.css';
import './FullPost.css'

const fullPost = (props) => {
    return (
        <div className="post fullPost">
            <h1>Title</h1>
            <p>Content</p>
            <button>Delete</button>
        </div>
    );
}

export default fullPost;