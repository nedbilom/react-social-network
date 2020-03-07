import React from 'react';
import { updateNewPostTextActionCreator, newPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     const onPostChange = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text));
//                     }; // Изменение textarea
//                     const addPost = () => {
//                         store.dispatch(newPostActionCreator());
//                     }; // Добавление поста

//                     return <MyPosts updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(newPostActionCreator());
        },
    };
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;