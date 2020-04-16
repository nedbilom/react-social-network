import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../untils/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../Common/FormsControls/FormsControls.module.css';

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div><Field component={Input} validate={[required, maxLength30]} name={"email"} placeholder={"Email"} type={"text"} /></div>
    <div><Field component={Input} validate={[required]} name={"password"} placeholder={"Password"} type={"password"} /></div>
    <div><Field component={Input} name={"rememberMe"} type={"checkbox"} />Remember me</div>
    {props.error && (<div className={s.form_summery_error}>
      {props.error}
    </div>)}
    <div><button>Send</button></div>
  </form >
};

let LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const MSTP = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(MSTP, { login, logout })(Login);