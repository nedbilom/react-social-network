import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <img src="https://i.ytimg.com/vi/zfedyBkkEn8/maxresdefault.jpg" alt="nodejs" className={s.content_img} />
            <div>
                ava + description
        </div>
        </div>
    )
};

export default ProfileInfo;