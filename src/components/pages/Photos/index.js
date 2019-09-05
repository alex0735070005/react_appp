import React, { useState, useEffect } from 'react';
import { listPhotos } from './service';
import './style.scss';

function Photos() {
    const [photos, changePhotos] = useState([]);

    useEffect(() => {
        // listPhotos()
        //    e .then((data) => {
        //         console.log(data);
        //         // changPhotos(data)
        //     });
        changePhotos([
            { name: 'img-1' },
            { name: 'img-2' },
            { name: 'img-3' },
            { name: 'img-4' },
            { name: 'img-5' },
            { name: 'img-6' },
        ])
    }, []);



    return (
        <div id="photos">
            {
                photos.map(photo => <h2>{photo.name}</h2>)
            }
        </div>
    )
}

export default Photos;
