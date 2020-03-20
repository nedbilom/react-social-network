import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authorized } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authorized();
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
};



export default connect(mapStateToProps, { authorized })(HeaderContainer);