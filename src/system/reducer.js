import { combineReducers } from 'redux';
import favorite from '../components/pages/Favorite/reducer';
import posts from '../components/pages/Posts/reducer';

export default combineReducers({
    favorite,
    posts,
});
