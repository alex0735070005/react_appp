import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from '../components/pages/posts/Favorite';
import Posts from '../components/pages/posts/Post';
import PostPage from '../components/pages/posts/PostPage';

function Router(props) {

    return (
        <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/post/:id" component={PostPage} />
        </Switch>
    )
}

export default Router;