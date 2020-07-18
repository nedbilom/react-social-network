const NEW_MESSAGE = "dialogs/NEW_MESSAGE";

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let contentText = action.newMessageBody;
            return {
                ...state,
                dataMessages: [...state.dataMessages, { id: 4, content: contentText, avatar: "./images/avatars/molib.jpg" }]
            };
        default:
            return state;

    }
};

export const newMessage = (newMessageBody) => ({
    type: NEW_MESSAGE,
    newMessageBody
});

export default dialogsReducer;