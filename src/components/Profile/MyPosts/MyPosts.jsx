import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postElement = props.postData.map(post =>
        <Post message={post.message} likeCount={post.likeCount} key={post.id} />
    ); // Создание новых элементов
    let newPostElement = React.createRef(); // Ссылка на textarea


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }; // Изменение textarea
    let onAddPost = () => {
        props.addPost();
    }; // Добавление поста


    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} name="newPost" id="" cols="30" rows="5" value={props.newPostText} />
                <br />
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts;