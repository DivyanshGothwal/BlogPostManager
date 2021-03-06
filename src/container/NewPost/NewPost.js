import React ,{Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './NewPost.css';
import '../../components/Post/Post.css';

class NewPost extends Component{
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted:false
    }
    inputTitleChangeHandler = (e) =>{
        this.setState({title:e.target.value});
    }
    inputContentChangeHandler = (e) =>{
        this.setState({content:e.target.value});
    }
    postDataHandler= ()=>{
        const post ={
            title:this.state.title,
            body:this.state.content,
            author:this.state.author
        }
        axios.post('',post)
        .then((e)=>{
            console.log(e);
            this.setState({submitted:true});
        });
    }
    render(){
        if(this.state.submitted){
            return <Redirect to="/post"/>
        }
        return(
            <div className="NewPost post">
                <h1 className>Add a Post</h1>
                <label>Title</label>
                <input type="text" onChange={this.inputTitleChangeHandler} value={this.state.title}></input>
                <label>Content</label>
                <textarea rows="4" onChange={this.inputContentChangeHandler} value={this.state.content}></textarea>
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}


export default NewPost;