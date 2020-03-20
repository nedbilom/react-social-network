import React from "react";
import { newMessage, updateNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// Main component


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const DialogsContainer = connect(mapStateToProps, { newMessage, updateNewMessage })(Dialogs);

export default DialogsContainer;