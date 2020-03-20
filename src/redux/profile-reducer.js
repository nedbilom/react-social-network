import { profileAPI } from '../api/api';

const NEW_POST = "NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postData: [
        {
            id: 1,
            message: "It's my first post1",
            likeCount: 2
        },
        {
            id: 2,
            message: "Hello! How are you?",
            likeCount: 4
        },
        {
            id: 3,
            message: "Хей, йоу",
            likeCount: 10
        },
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_POST: {
            return {
                ...state,
                postData: [
                    ...state.postData,
                    { id: 4, message: state.newPostText, likeCount: 0 },
                ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const addPost = () => ({
    type: NEW_POST
});

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;