import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '../shared/components/List';
import { listPosts } from '../shared/service';
import '../shared/style.scss';

function Posts(props) {

    const {
        posts,
        setPostsAction,
        addFavoriteAction
    } = props;

    useEffect(() => {
        listPosts()
            .then((data) => {
                // console.log(data);
                setPostsAction(data);
            });
    }, []);

    return (
        <div className="post-theme" id="posts">
            <List
                posts={posts}
                addFavorite={addFavoriteAction}
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
        }
    }
}

const mapStateToProps = state => {

    return {
        posts: state.posts.dataPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
