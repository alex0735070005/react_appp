import React from 'react';
import { connect } from 'react-redux';

import List from '../shared/components/List';
import '../shared/style.scss';

function Favorite(props) {

    const { posts } = props;

    return (
        <div className="post-theme" id="favorite">
            <List
                posts={posts}
            />
        </div>
    )
}

const mapStateToProps = state => {

    return {
        posts: state.favorite.posts,
    }
}

export default connect(mapStateToProps)(Favorite);
