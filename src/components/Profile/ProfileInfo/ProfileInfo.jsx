import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import placeholderImage from '../../../images/avatars/placeholder.jpg';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [ editMode, setEditMode ] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div>
                <h2>{profile.fullName}</h2>
                <img src={profile.photos.small || placeholderImage} alt="" />
                { isOwner && <><br /><input type="file" onChange={onMainPhotoSelected}></input></> }
                <ProfileStatus status={status} updateStatus={updateStatus} />
                {editMode 
                ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile} />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <>
    <div>
        <p>{profile.aboutMe}</p>
        <p>{profile.lookingForAJob ? 'Не ищу работу' : 'Ищу работу'}</p>
        <p>My professional skills: { profile.lookingForAJobDescription || 'Не указано' }</p>
        Контакты:
        <ul>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </ul>
        {isOwner && <button onClick={goToEditMode}>Edit Mode</button>}
    </div>
    </>
}

const Contact = ({ contactTitle, contactValue } ) => {
    return <li>{contactTitle}: {contactValue}</li>
}

export default ProfileInfo;