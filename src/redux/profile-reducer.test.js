import { addPost, deletePost, profileReducer } from './profile-reducer';

it('length of posts should be incremented', () => {
  // Initial test
  const action = addPost('какой-то текст');
  let state = {
    postData: [
      {
        id: 1,
        message: "It's my first post1",
        likeCount: 2
      },
      {
        id: 2,
        message: "Hello! How are you?",
        likeCount: 4
      },
      {
        id: 3,
        message: "Хей, йоу",
        likeCount: 10
      },
    ],
  }

  // Action test
  let newState = profileReducer(state, action)

  // Expect result
  expect(newState.postData.length).toBe(4)
})

it('post should be deleted by id', () => {
  // Initial test
  const action = deletePost(2);
  let state = {
    postData: [
      {
        id: 1,
        message: "It's my first post1",
        likeCount: 2
      },
      {
        id: 2,
        message: "Hello! How are you?",
        likeCount: 4
      },
      {
        id: 3,
        message: "Хей, йоу",
        likeCount: 10
      },
    ],
  }

  // Action test
  let newState = profileReducer(state, action)

  // Expect result
  expect(newState.postData.length).toBe(2)
})