import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import AsideContainer from './components/Aside/AsideContainer';
import Preloader from './components/Common/Preloader/Preloader';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className="appWrapper">
          <HeaderContainer />
          <AsideContainer />
          <div className="appWrapperContent">
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <Route path="/login" render={() => <Login />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </React.Suspense>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App); 

const SamuraiJSApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
    </BrowserRouter >
}

export default SamuraiJSApp;