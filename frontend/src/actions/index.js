export const ADD_POST = 'ADD_POST';

//action creators
export function addPost (id, timestamp, title, body, author,category) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}