const initialState = {
    name: 'FAVORITE',
    posts: [],
}

export default function (state = initialState, action) {


    const setFavorite = (post, state) => {

        const isPost = state.posts.find(p => p.id === post.id);

        if(!isPost) {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { ...action.post }
                ]
            } 
        }

        return state;
    }

    switch (action.type) {
        case 'ADD_FAVORITE': return setFavorite(action.post, state);

        default: return state;
    }

}