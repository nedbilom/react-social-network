import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../untils/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

let maxLengthCreator20 = maxLengthCreator(20);

const PostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div><Field component={Textarea} validate={[required, maxLengthCreator20]} placeholder="Enter post" name="newPostBody" id="" cols="30" rows="5" /></div>
    <div><button>Add post</button></div>
  </form>
};

const PostReduxForm = reduxForm({
  form: 'post'
})(PostForm);

export default PostReduxForm;