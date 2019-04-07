import React from 'react';
import './Post.css'
const post = (props) => {
    return(
        <div onClick={props.clicked} className="post postEle" >
            <h2>{props.title}</h2>
            <p className="paragraph">{props.author}</p>
        </div>
    );
}

export default post;