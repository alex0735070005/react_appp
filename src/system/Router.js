import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from '../components/pages/Favorite';
import Photos from '../components/pages/Photos';

function Router(props) {

    return (
        <Switch>
            <Route path="/" exact component={Photos} />
            <Route path="/favorite" component={Favorite} />
        </Switch>
    )
}

export default Router;