let initialState = {
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
            "link": "/users",
            "name": "Users"
        },
        {
            "id": 4,
            "link": "/news",
            "name": "News"
        },
        {
            "id": 5,
            "link": "/music",
            "name": "Music"
        },
        {
            "id": 6,
            "link": "/settings",
            "name": "Settings"
        },
    ],
    dataFriends: [
        {
            "id": 1,
            "avatarLink": "./images/avatars/mishka.jpg",
            "friendName": "Мишка"
        },
        {
            "id": 2,
            "avatarLink": "./images/avatars/vlad.jpg",
            "friendName": "Влад"
        },
        {
            "id": 3,
            "avatarLink": "./images/avatars/nastya.jpg",
            "friendName": "Наська"
        }
    ]
};

const asideReducer = (state = initialState, action) => {
    return state;
};

export default asideReducer;