import {
    BASE_URL,
    CLIENT_ID,
} from '../../../../system/settings';

export const listPosts = () => {

    const url = `${BASE_URL}`;

    return fetch(url).then(response => {
        return response.json();
    });
}

export const likePost = (photo, like) => {

    const url = `${BASE_URL}${photo.id}/like/?client_id=${CLIENT_ID}`;

    return fetch(url, {
        method: 'POST',
    }).then(response => {
        return response.json();
    });
}

