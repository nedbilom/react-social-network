import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostReduxForm from './PostForm';

const MyPosts = (props) => {
    const postElement = props.postData.map(post =>
        <Post message={post.message} likeCount={post.likeCount} key={post.id} />
    ); // Создание новых элементов

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }; // Добавление поста


    return (
        <div>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={onAddPost} />
            {postElement}
        </div>
    )
}

export default MyPosts;