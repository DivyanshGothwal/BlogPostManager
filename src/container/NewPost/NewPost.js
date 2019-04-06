import React ,{Component} from 'react';
import './NewPost.css';
import '../../components/Post/Post.css';
class NewPost extends Component{
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    inputTitleChangeHandler = (e) =>{
        this.setState({title:e.target.value});
    }
    inputContentChangeHandler = (e) =>{
        this.setState({content:e.target.value});
    }
    render(){
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
                <button>Add Post</button>
            </div>
        );
    }
}


export default NewPost;