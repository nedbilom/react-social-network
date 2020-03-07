import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import asideReducer from './aside-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    asideState: asideReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;