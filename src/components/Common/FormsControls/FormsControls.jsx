import React from 'react';
import style from './FormsControls.module.css';

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {

  const hasError = touched && error;

  return <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
    <textarea  {...props} {...input} /> <br />
    {hasError && < span > {error}</span>}
  </div >
}

export const Input = ({ input, meta: {touched, error}, ...props }) => {

  const hasError = touched && error;

  return <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
    <input  {...props} {...input} /> <br />
    {hasError && < span > {error}</span>}
  </div >
}