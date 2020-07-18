import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../untils/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../Common/FormsControls/FormsControls.module.css';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return <form onSubmit={handleSubmit}>
    <div><Field component={Input} validate={[required, maxLength30]} name={"email"} placeholder={"Email"} type={"text"} /></div>
    <div><Field component={Input} validate={[required]} name={"password"} placeholder={"Password"} type={"password"} /></div>
    <div><Field component={Input} name={"rememberMe"} type={"checkbox"} />Remember me</div>
    {error && (<div className={style.form_summery_error}>
      {error}
    </div>)}
    <div><button>Send</button></div>
    {captchaUrl && <img src={captchaUrl} alt="captcha"></img>}
    {captchaUrl && <Field component={Input} validate={[required]} name={"captcha"} type={"text"}/>}
  </form >
};

let LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {

  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (isAuth) {
    return <Redirect to={"/profile"} />
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
  </div>
}

const MSTP = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(MSTP, { login, logout })(Login);