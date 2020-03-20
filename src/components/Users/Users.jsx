import React from 'react';
import s from './users.module.css';
import avatarPlaceholder from './../../../src/image/avatars/mishka.jpg';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.userWrapper}>
            <h2 className={s.pageTitle}>Users</h2>
            <div>
                {pages.map(p => {
                    return <span className={`${s.currentPage} ${props.currentPage === p && s.selectedPage}`} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div className={s.userCard} >
                        <div className={s.wrapperAvatar}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.user_photo} src={u.photos.small != null ? u.photos.small : avatarPlaceholder}></img>
                            </NavLink>
                        </div>



                        <div className={s.userDesc}>
                            <h3 className={s.fullName}>{u.name}</h3>
                            <img className={s.status_icon} src="./images/icons/status.svg" alt="" />
                            <span className={s.status}>{u.status ? u.status : 'Нет статуса'}</span>
                        </div>




                        <div className={s.followWrap}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={`${s.button} ${s.buttonUnfollow}`} onClick={() => { props.unfollow(u.id) }}>unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} className={`${s.button} ${s.buttonFollow}`} onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Users;