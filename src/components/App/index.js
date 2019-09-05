import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Router from '../../system/Router';

import './style.scss';

function App() {

    return (
        <div id="app">
            <Header />
            <div className="page">
                <Router />
            </div>
            <Footer />
        </div>
    )
}

export default App;
