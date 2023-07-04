// Action types
const actions = {
    ADD_CATEGORY: 'ADD_CATEGORY',
    REMOVE_CATEGORY: 'REMOVE_CATEGORY',
    UPDATE_CATEGORIES: 'UPDATE_CATEGORIES',
};

// Action creators
export const addCategory = payload => ({ type: actions.ADD_CATEGORY, payload });
export const removeCategory = payload => ({ type: actions.REMOVE_CATEGORY, payload });
export const updateCategories = payload => ({ type: actions.UPDATE_CATEGORIES, payload });

// Reducer
const initialState = {
    categories: [],
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload] };
        case actions.REMOVE_CATEGORY:
            return { ...state, categories: state.categories.filter(category => category !== action.payload) };
        case actions.UPDATE_CATEGORIES:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
};

export default categoriesReducer;

// Selectors
export const getAllCategories = state => state.categories.categories;
export const getFilteredCategories = (state, category) => state.posts.posts.filter(post => post.category === category);
