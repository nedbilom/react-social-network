import React from 'react';
import s from './ProfileInfo.module.css';
import placeholderImage from '../../../image/avatars/placeholder.jpg';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const profile = props.profile;
    const contacts = new Array;

    for (let key in profile.contacts) {
        let prop = profile.contacts[key];
        if (prop) contacts.push(prop)
    }
    const contactsList = contacts.map(contact => <li>{contact}</li>)
    return (
        <div>
            <img src="https://i.ytimg.com/vi/zfedyBkkEn8/maxresdefault.jpg" alt="nodejs" className={s.content_img} />
            <div>
                <h2>{profile.fullName}</h2>
                <img src={profile.photos.small ? profile.photos.small : placeholderImage} alt="" srcset="" />
                <p>{profile.aboutMe}</p>
                <p>{profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</p>
                {contacts.length ? <div><h2>Мои контакты:</h2>
                    <ul>
                        {contactsList}
                    </ul></div>
                    : <span>Контактов нет</span>}
            </div>
        </div>
    )
}

export default ProfileInfo;