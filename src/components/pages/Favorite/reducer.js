const initialState = {
    name: 'FAVORITE',
    posts: [],
}

export default function (state = initialState, action) {
    if(action.type === 'SET_POSTS') {
        return {
            ...state,
            posts: action.dataPosts
        }
    }
    return state;
}