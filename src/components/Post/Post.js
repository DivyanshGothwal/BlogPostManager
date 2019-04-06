import React from 'react';
import './Post.css'
const post = (props) => {
    return(
        <div className="post postEle" >
            <h2>Title</h2>
            <p className="paragraph">Author</p>
        </div>
    );
}

export default post;