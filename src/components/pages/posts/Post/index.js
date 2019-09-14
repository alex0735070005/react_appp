import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '../shared/components/List';
import { listPosts, updatePost } from '../shared/service';
import '../shared/style.scss';

function Posts(props) {

    const {
        posts,
        setPostsAction,
        addFavoriteAction,
        removeFavoriteAction,
        changePostStatusAction,
        updatePostAction,
    } = props;

    useEffect(() => {
        listPosts()
            .then((data) => {
                // console.log(data);
                setPostsAction(data);
            });
    }, []);

    const likePost = post => {
        updatePost({
            id: post.id,
            likes: parseInt(post.likes) + 1,
        }).then(data => {
            updatePostAction(data);
        })
    }

    return (
        <div className="post-theme" id="posts">
            <List
                posts={posts}
                likePost={likePost}
                addFavorite={addFavoriteAction}
                removeFavorite={removeFavoriteAction}
                changePostStatus={changePostStatusAction}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPostsAction: dataPosts => {
            dispatch({ type: 'SET_POSTS', dataPosts });
        },
        addFavoriteAction: post => {
            dispatch({ type: 'ADD_FAVORITE', post });
        },
        removeFavoriteAction: id => {
            dispatch({ type: 'REMOVE_FAVORITE', id });
        },
        changePostStatusAction: id => {
            dispatch({ type: 'CHANGE_POST_STATUS', id });
        },
        updatePostAction: post => {
            dispatch({ type: 'UPDATE_POST', post });
        }
    }
}

const mapStateToProps = state => {

    return {
        posts: state.posts.dataPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
