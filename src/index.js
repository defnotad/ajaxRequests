import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((request) => {
    console.log(request);
    return request;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
