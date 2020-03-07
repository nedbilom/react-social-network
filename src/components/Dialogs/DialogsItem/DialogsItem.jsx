import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

// Components
const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={s.dialog} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
};

export default DialogsItem;