import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from './components/List';
import { listPosts } from './service';
import './style.scss';

function Posts(props) {

    const { posts, setPosts } = props;

    useEffect(() => {
        listPosts()
            .then((data) => {
                // console.log(data);
                setPosts(data);
            });
    }, []);

    return (
        <div id="posts">
            <List posts={posts} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return { 
        setPosts: dataPosts => {
            dispatch({type: 'SET_POSTS', dataPosts});
        }
    }
}

const mapStateToProps = state => {

    return {
        posts: state.posts.dataPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
