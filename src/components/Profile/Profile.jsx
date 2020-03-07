import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

// data

const Profile = () => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;