import React from 'react';
import Header from './components/Header/Header';
import AsideContainer from './components/Aside/AsideContainer';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music"
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import './App.css';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <div className="appWrapper">
      <Header />
      <AsideContainer />
      <div className="appWrapperContent">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>

    </div>
  );

};


export default App;