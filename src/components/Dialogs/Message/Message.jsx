import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt="avatar" />
            {props.content}
        </div>
    )
};

export default Message;