import React from 'react';
import { reduxForm, Field } from 'redux-form';


const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div><Field component={"input"} name={"login"} placeholder={"Login"} type={"text"} /></div>
    <div><Field component={"input"} name={"password"} placeholder={"Password"} type={"text"} /></div>
    <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me</div>
    <div><button>Send</button></div>
  </form >
};

let LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default Login;