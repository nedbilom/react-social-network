import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://sun9-66.userapi.com/c205328/v205328807/65b6f/OlbqZKh-CN0.jpg" alt="avatar" />
            <p>{props.message}</p>
            <br />
            <span className={s.likeCounter}>Like: {props.likeCount}</span>
        </div>
    )
}

export default Post;