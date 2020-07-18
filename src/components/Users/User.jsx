import React from 'react';
import style from './users.module.css';
import avatarPlaceholder from './../../../src/images/avatars/placeholder.jpg';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
return (
      <div className={style.userCard} >
          <div className={style.wrapperAvatar}>
              <NavLink to={'/profile/' + user.id}>
                  <img alt={''} className={style.user_photo} src={user.photos.small != null ? user.photos.small : avatarPlaceholder}></img>
              </NavLink>
          </div>
          <div className={style.userDesc}>
              <h3 className={style.fullName}>{user.name}</h3>
              <img className={style.status_icon} src="./images/icons/status.svg" alt="" />
              <span className={style.status}>{user.status ? user.status : 'Нет статуса'}</span>
          </div>
          <div className={style.followWrap}>
              {user.followed
                  ? <button disabled={followingInProgress.some(id => id === user.id)} className={`${style.button} ${style.buttonUnfollow}`} onClick={() => { unfollow(user.id) }}>unfollow</button>
                  : <button disabled={followingInProgress.some(id => id === user.id)} className={`${style.button} ${style.buttonFollow}`} onClick={() => { follow(user.id) }}>follow</button>}
          </div>
      </div>
  )
}

export default User;