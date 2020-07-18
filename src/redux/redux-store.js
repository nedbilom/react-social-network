import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import asideReducer from './aside-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    asideState: asideReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

export default store;