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

export const getPost = id => {

    const url = `${BASE_URL}/${id}`;

    return fetch(url).then(response => {
        return response.json();
    });
}

export const updatePost = data => {

    return fetch(`${BASE_URL}/update/${data.id}`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    });
}
