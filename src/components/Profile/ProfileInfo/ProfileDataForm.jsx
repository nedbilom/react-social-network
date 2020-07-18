import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea } from './../../Common/FormsControls/FormsControls';
import style from '../../Common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return <form onSubmit={handleSubmit}>
      <span>Full Name: <Field component={Input} name={"fullName"} placeholder={"Введите ваше имя"} type={"text"}/></span>
      <span><b>Обо мне:</b><Field component={Textarea} name={"aboutMe"}/></span>
      <span><b>В поиске работы?</b><Field component={Input} name={"lookingForAJob"} type={"checkbox"}/></span>
      <span><b>Мои профессиональный навыки:</b><Field component={Textarea} name={"lookingForAJobDescription"}/></span>
      <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    {key}: <Field component={Input} name={"contacts." + key} placeholder={key} type={"text"}/>
                </div> 
            })}
      </div>
      <button>Save</button>
      {error && (<div className={style.form_summery_error}>
      {error}
    </div>)}
  </form>
}

let ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
  })(ProfileDataForm);

export default ProfileDataReduxForm;