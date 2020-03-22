import React from "react";
import { newMessage, updateNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";

// Main component


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

export default compose(
    connect(mapStateToProps, { newMessage, updateNewMessage }),
    withAuthRedirect
)(Dialogs);