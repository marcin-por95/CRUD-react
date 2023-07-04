import shortid from "shortid";

// Selectors
export const getAllPosts = state => state.posts.posts;
export const getPostById = (state, id) => state.posts.posts.find(post => post.id === id);

// Actions
const actions = {
	REMOVE_POSTS: 'REMOVE_POST',
	ADD_POST: 'ADD_POST',
	EDIT_POST: 'EDIT_POST',
}

const initialState = {
	posts: [
		{
			id: '1',
			title: 'Article title',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date("1/2/2018"),
			author: 'John Doe',
			category: 'News'
		},
		{
			id: '2',
			title: 'Article title 2',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date("1/2/2018"),
			author: 'John Doe',
			category: 'Movies'
		},
		{
			id: '3',
			title: 'Article title 3',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date("1/2/2018"),
			author: 'John Doe',
			category: 'News'
		},
		{
			id: '4',
			title: 'Article title 4',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date("1/2/2018"),
			author: 'John Doe',
			category: 'Sport'
		}
	],
	categories: ["Sport", "News", "Movies"]
};

// Actions creators
export const removePost = payload => ({ type: actions.REMOVE_POSTS, payload });
export const addPost = payload => ({ type: actions.ADD_POST, payload });
export const editPost = payload => ({ type: actions.EDIT_POST, payload });

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.REMOVE_POSTS:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload)
			};
		case actions.ADD_POST:
			return {
				...state,
				posts: [...state.posts, { ...action.payload, id: shortid() }]
			};
		case actions.EDIT_POST:
			return {
				...state,
				posts: state.posts.map(post =>
					post.id === action.payload.id ? { ...post, ...action.payload } : post
				)
			};
		default:
			return state;
	}
};


export default postsReducer;
