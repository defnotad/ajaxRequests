import React, { Component } from 'react';
import axios from "axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };

    selectPost = (id) => {
        this.setState({ selectedPostId: id });
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = [];
                for (let i = 0; i < 5; i++) {
                    const post =
                        <Post
                            key={response.data[i].id}
                            title={response.data[i].title}
                            author='Max'
                            selected={() => this.selectPost(response.data[i].id)}

                        />;
                    posts.push(post);
                }
                this.setState({ posts: posts });
            })
            .catch(err => {
                this.setState({ error: true })
            });
    }

    render() {
        let posts = this.state.posts;
        if (this.state.error) {
            posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;