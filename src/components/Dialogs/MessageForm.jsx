import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../untils/validators';

let maxLengthCreator50 = maxLengthCreator(50);

const MessageForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <div><Field component={Textarea} validate={[required, maxLengthCreator50]} className={props.style.dialogsTextarea} placeholder="Enter your message" name="newMessageBody" id="" cols="60" rows="10"></Field></div>
    <div><button>Отправить</button></div>
  </form>

}

const MessageReduxForm = reduxForm({
  form: "dialogAddMessageForm"
})(MessageForm);

export default MessageReduxForm;