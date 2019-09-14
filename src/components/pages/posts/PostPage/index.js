import React, { useEffect, useState } from 'react';
import { getPost } from '../shared/service';

import './style.scss';

function PostPage(props) {

    const [post, setPost] = useState({});

    const id = props.match.params.id;

    useEffect(() => {
        getPost(id)
            .then(data => {
                setPost(data);
            })
    }, []);


    return (
        <div className="post" id="post-page">
            <h2>{post.title}</h2>
            <h2>{post.description}</h2>
        </div>
    )
}


export default PostPage;
