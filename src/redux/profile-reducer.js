import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

// Actions
const NEW_POST = "profile/NEW_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

// Reducer
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

export const profileReducer = (state = initialState, action) => {

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
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter((elem) => elem.id !== action.postId),
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile, 
                    photos: action.photos
                }
            }
        }
        default:
            return state;
    }
};

// Action Creators
export const addPost = (newPostBody) => ({
    type: NEW_POST,
    newPostBody
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : 'Some error!'
        dispatch(stopSubmit("edit-profile", { _error: message }));
        return Promise.reject(response.messages[0]);
    }
}

export default profileReducer;