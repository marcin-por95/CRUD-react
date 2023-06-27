// Selectors
import shortid from "shortid";

export const getAllPosts = state => state.posts;
export const getPostById = (state, id) => state.posts.find(post => post.id === id);
// Actions
const actions = {
  REMOVE_POSTS: 'REMOVE_POST',
  ADD_POST: 'ADD_POST',
  EDIT_POST: 'EDIT_POST',
}
const initialState = [
  {
	id: '1',
	title: 'Article title',
	shortDescription: 'Short description of the article...',
	content: 'Main content of the article',
	publishedDate: '02-02-2022',
	author: 'John Doe'
  },
  {
	id: '2',
	title: 'Article title 2',
	shortDescription: 'Short description of the article...',
	content: 'Main content of the article',
	publishedDate: '02-02-2022',
	author: 'John Doe'
  },
  {
	id: '3',
	title: 'Article title 3',
	shortDescription: 'Short description of the article...',
	content: 'Main content of the article',
	publishedDate: '02-02-2022',
	author: 'John Doe'
  },
  {
	id: '4',
	title: 'Article title 4',
	shortDescription: 'Short description of the article...',
	content: 'Main content of the article',
	publishedDate: '02-02-2022',
	author: 'John Doe'
  }
]

// Actions creators
export const removePost = payload => ({ type: actions.REMOVE_POSTS, payload });
export const addPost = payload => ({ type: actions.ADD_POST, payload });
export const editPost = payload => ({ type: actions.EDIT_POST, payload });
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
	case actions.REMOVE_POSTS:
	  return [...state.filter(post => post.id !== action.payload)];
	case actions.ADD_POST:
	  return [...state, { ...action.payload, id: shortid() }];
	case actions.EDIT_POST:
	  return state.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
	
	default:
	  return state;
  }
};
export default postsReducer;
