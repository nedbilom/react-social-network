import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import MessageReduxForm from "./MessageForm";

// Main component
const Dialogs = (props) => {

    // Mapped
    const dialogsElement = props.dialogsPage.dataDialogsItem.map(dialog =>
        <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
    );

    const messagesElement = props.dialogsPage.dataMessages.map(message =>
        <Message content={message.content} avatar={message.avatar} key={message.id} />
    );

    const addNewMessage = (values) => {
        props.newMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}

                <div className={s.addSms}>
                    <MessageReduxForm onSubmit={addNewMessage} style={s} />
                </div>

            </div>
        </div>
    )
};

export default Dialogs;