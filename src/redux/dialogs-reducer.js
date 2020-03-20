const NEW_MESSAGE = "NEW_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    dataDialogsItem: [
        {
            id: 1,
            name: "Dencha"
        },
        {
            id: 2,
            name: "Mishka"
        },
        {
            id: 3,
            name: "Nastya"
        },
        {
            id: 4,
            name: "Jenya"
        },
        {
            id: 5,
            name: "Vlad"
        }
    ],
    dataMessages: [
        {
            id: 1,
            content: "Hi",
            avatar: "./images/avatars/mishka.jpg"
        },
        {
            id: 2,
            content: "How are you?",
            avatar: "./images/avatars/mishka.jpg"
        },
        {
            id: 3,
            content: "Йоу! Чо как чувааааак!",
            avatar: "./images/avatars/molib.jpg"
        },
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let contentText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                dataMessages: [...state.dataMessages, { id: 4, content: contentText, avatar: "./images/avatars/molib.jpg" }]
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;

    }
};

export const newMessage = () => ({
    type: NEW_MESSAGE
});

export const updateNewMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text
});

export default dialogsReducer;