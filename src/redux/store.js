import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import asideReducer from './aside-reducer';

const store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        asideState: {
            dataMenu: [
                {
                    "id": 1,
                    "link": "/profile",
                    "name": "Profile"
                },
                {
                    "id": 2,
                    "link": "/dialogs",
                    "name": "Dialogs"
                },
                {
                    "id": 3,
                    "link": "/news",
                    "name": "News"
                },
                {
                    "id": 4,
                    "link": "/music",
                    "name": "Music"
                },
                {
                    "id": 5,
                    "link": "/settings",
                    "name": "Settings"
                },
            ],
            dataFriends: [
                {
                    "avatarLink": "./images/avatars/mishka.jpg",
                    "friendName": "Мишка"
                },
                {
                    "avatarLink": "./images/avatars/vlad.jpg",
                    "friendName": "Влад"
                },
                {
                    "avatarLink": "./images/avatars/nastya.jpg",
                    "friendName": "Наська"
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);
        this._state.asideReducer = asideReducer(this._state.asideReducer, action);

        this._callSubscriber(this._state);
    },
};
// window.store = store;

export default store;