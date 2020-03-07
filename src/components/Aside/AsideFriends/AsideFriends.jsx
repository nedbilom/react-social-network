import React from 'react';
import s from './AsideFriends.module.css';

const AsideFriends = (props) => {
    const friendsList = props.dataFriends.map(friend =>
        <div className={s.asideFriends__item} key={friend.id}>
            <a href="#"><img className={s.friend_avatar} src={friend.avatarLink} alt="avatar" /></a>
            <a className={s.friend_name} href="#">{friend.friendName}</a>
        </div>
    )
    return (
        <div className={s.aside_wrap}>
            <h3>Friends</h3>
            <div className={s.asideFriends}>
                {friendsList}
            </div>
        </div>
    )
}

export default AsideFriends;