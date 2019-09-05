import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from '../components/pages/Favorite';
import Posts from '../components/pages/Posts';

function Router(props) {

    return (
        <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/favorite" component={Favorite} />
        </Switch>
    )
}

export default Router;