const NEW_POST = "NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
        default:
            return state;
    }
};

export const newPostActionCreator = () => ({
    type: NEW_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;