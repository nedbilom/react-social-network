import React from 'react';
import style from './users.module.css';
import User from './User';
import Paginator from '../Common/Paginator/Paginator';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
return (
    <div className={style.userWrapper}>
        <h2 className={style.pageTitle}>Users</h2>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            { users.map(u => <User user={u} followingInProgress={props.followingInProgress} key={u.id} unfollow={props.unfollow} follow={props.follow} />) }
        </div>
    </div >
)
}

export default Users;