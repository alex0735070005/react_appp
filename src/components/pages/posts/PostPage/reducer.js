import { getValue } from '../../../../system/localStorage';

const initialState = {
    name: 'POSTS',
    dataPosts: [],
}


export default function (state = initialState, action) {

    if (action.type === 'SET_POSTS') {

        const getPosts = posts => {

            const favorite = getValue('favorite') || [];

            return posts.map(post => {
                if (favorite.find(f => f.id === post.id)) {
                    return { ...post, checkFavorite: true }
                }
                return { ...post, checkFavorite: false }
            })

        }

        return {
            ...state,
            dataPosts: getPosts(action.dataPosts)
        }
    }


    if (action.type === 'CHANGE_POST_STATUS') {
        return {
            ...state,
            dataPosts: state.dataPosts.map(post => {
                if (post.id === action.id) {
                    return { ...post, checkFavorite: !post.checkFavorite }
                }
                return post;
            })
        }
    }

    if (action.type === 'UPDATE_POST') {
        return {
            ...state,
            dataPosts: state.dataPosts.map(post => {
                if (post.id === action.post.id) {
                    return { ...post, ...action.post }
                }
                return post;
            })
        }
    }

    return state;
}