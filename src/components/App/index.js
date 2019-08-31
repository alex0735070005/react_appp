import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Favorite from '../pages/Favorite';
import Photos from '../pages/Photos';
import './style.scss';

function App() {
    const [isFavorite, changeFavorite] = useState(true);
    const [isPhotos, changePhotos] = useState(false);

    const changePage = e => {
        e.preventDefault();
        const path = e.target.href;

        changeFavorite(/favorite/.test(path));
        changePhotos(/photos/.test(path));
    }

    return (
        <div id="app">
            <Header changePage={changePage} />
            {isFavorite && <Favorite/>}
            {isPhotos && <Photos/>}
            <Footer />
        </div>
    )
}

export default App;
