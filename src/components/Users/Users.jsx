import React from 'react';
import * as axios from 'axios';
import s from './users.module.css';
import avatarPlaceholder from './../../../src/image/avatars/mishka.jpg';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        return (
            <div className={s.userWrapper}>
                <h2 className={s.pageTitle}>Users</h2>
                {
                    this.props.users.map(u =>
                        <div className={s.userCard} >
                            <div className={s.wrapperAvatar}>
                                <img className={s.user_photo} src={u.photos.small != null ? u.photos.small : avatarPlaceholder}></img>
                            </div>



                            <div className={s.userDesc}>
                                <h3 className={s.fullName}>{u.name}</h3>
                                <img className={s.status_icon} src="./images/icons/status.svg" alt="" />
                                <span className={s.status}>{u.status}</span>
                                <div className={s.location}>
                                    <img className={s.location_icon} src="./images/icons/location.svg" alt="" />
                                    <span className={s.country}>{"u.location.country"}</span>
                                    <span className={s.city}>{"u.location.city"}</span>
                                </div>
                            </div>




                            <div className={s.followWrap}>
                                {u.followed
                                    ? <button className={`${s.button} ${s.buttonUnfollow}`} onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                    : <button className={`${s.button} ${s.buttonFollow}`} onClick={() => { this.props.follow(u.id) }}>follow</button>}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;