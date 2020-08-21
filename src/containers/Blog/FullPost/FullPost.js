import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        // console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deletePost = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => console.log(response));
    }

    render() {
        console.log(this.props.match.params.id);
        let post = <p style={{ textAlign: 'center' }}>Loading!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;