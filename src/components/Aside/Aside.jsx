import React from 'react';
import s from './Aside.module.css';
import { NavLink } from "react-router-dom";
import AsideFriends from './AsideFriends/AsideFriends';

const Aside = (props) => {
    const menuItems = props.dataMenu.map(item =>
        <li key={item.id}><NavLink to={item.link} className={s.mainNav_item} activeClassName={s.active_item}>{item.name}</NavLink></li>);

    return (

        <aside className={s.aside}>
            <nav>
                <ul className={s.mainNav}>
                    {menuItems}
                </ul>
            </nav>
            <AsideFriends dataFriends={props.dataFriends} />
        </aside>

    )
}


export default Aside;