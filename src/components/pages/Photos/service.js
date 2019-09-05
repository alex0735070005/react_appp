import {
    BASE_URL,
    CLIENT_ID,
} from '../../../system/settings';

export const listPhotos = (limit = 10, page = 1) => {

    const url = `${BASE_URL}?client_id=${CLIENT_ID}&per_page=${limit}&page=${page}`;

    return fetch(url).then(response => {
        return response.json();
    });
}

export const likePhoto = (photo, like) => {

    const url = `${BASE_URL}${photo.id}/like/?client_id=${CLIENT_ID}`;

    return fetch(url, {
        method: 'POST',
    }).then(response => {
        return response.json();
    });
}

