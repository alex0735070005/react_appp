import { setValue, getValue } from '../../../../system/localStorage';

const initialState = {
    name: 'FAVORITE',
    posts: getValue('favorite') || [],
}

export default function (state = initialState, action) {

    const setFavorite = (post, state) => {

        const isPost = state.posts.find(p => p.id === post.id);

        if (!isPost) {

            const result = {
                ...state,
                posts: [
                    ...state.posts,
                    { ...action.post, checkFavorite: true }
                ]
            }

            setValue('favorite', result.posts);

            return result;
        }

        return state;
    }

    const removeFavorite = (id, state) => {

        const posts = state.posts.filter(post => post.id !== id);

        setValue('favorite', posts);

        return { ...state, posts };
    }

    switch (action.type) {
        case 'ADD_FAVORITE': return setFavorite(action.post, state);

        case 'REMOVE_FAVORITE': return removeFavorite(action.id, state);

        default: return state;
    }

}