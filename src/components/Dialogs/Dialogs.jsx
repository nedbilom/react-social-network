import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

// Main component
const Dialogs = (props) => {

    // Mapped
    const dialogsElement = props.dialogsPage.dataDialogsItem.map(dialog =>
        <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
    );

    const messagesElement = props.dialogsPage.dataMessages.map(message =>
        <Message content={message.content} avatar={message.avatar} key={message.id} />
    );

    let addText = (e) => {
        props.newMessage();
    };

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    };

    if (!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}

                <div className={s.addSms}>
                    <textarea onChange={onMessageChange} className={s.dialogsTextarea} name="messageTextarea" id="" cols="60" rows="10" value={props.dialogsPage.newMessageText}></textarea><br />
                    <button onClick={addText}>Отправить</button>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;