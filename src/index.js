import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts';
axios.defaults.headers.common['Authorization'] ='Token';

axios.interceptors.request.use(req=>{
    console.log(req);
    return req;
},error=>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(res=>{
    console.log(res);
    return res;
},error=>{
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render(<BrowserRouter> <Route to="/post" render={()=><h1>TEsting</h1>}></Route><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
