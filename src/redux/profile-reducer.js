import { profileAPI } from '../api/api';

const NEW_POST = "NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_POST: {
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {
                        id: 4,
                        message: action.newPostBody,
                        likeCount: 0
                    },
                ],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({
    type: NEW_POST,
    newPostBody
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }

            });
    }
}

export default profileReducer;