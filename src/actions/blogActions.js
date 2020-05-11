export const ADD_POST = 'ADD_POST';
export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = post => ({
  type: DELETE_POST,
  payload: post
});

export const UPDATE_POST ='UPDATE_POST';
