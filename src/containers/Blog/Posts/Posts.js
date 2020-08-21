import React, { Component } from "react";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    };

    selectPost = (id) => {
        this.props.history.push({ pathname: '/' + id });
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = [];
                for (let i = 0; i < 5; i++) {
                    const post = (
                        // <Link key={response.data[i].id} to={'/' + response.data[i].id}>
                        <Post
                            key={response.data[i].id}
                            title={response.data[i].title}
                            author='Max'
                            selected={() => this.selectPost(response.data[i].id)}
                        />
                        // </Link>
                    );
                    posts.push(post);
                }
                this.setState({ posts: posts });
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: true })
            });
    }

    render() {
        return (
            <section className="Posts">
                {this.state.posts}
            </section>
        );
    }
}


export default Posts;


