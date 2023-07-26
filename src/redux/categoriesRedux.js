//selectors
export const getAllCategories = state => state.categories;

export const getFilteredCategories = (state, category) =>
    state.posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());

// actions
const CREATE_CATEGORY = 'app/categories/CREATE_CATEGORY';
const DELETE_CATEGORY = 'app/categories/DELETE_CATEGORY';
const UPDATE_CATEGORY = 'app/categories/UPDATE_CATEGORY';

// action creators
export const createCategory = (category) => ({ type: CREATE_CATEGORY, payload: category });
export const deleteCategory = (id) => ({ type: DELETE_CATEGORY, payload: id });
export const updateCategory = (category) => ({ type: UPDATE_CATEGORY, payload: category });

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case CREATE_CATEGORY:
            return [...statePart, action.payload];
        case DELETE_CATEGORY:
            return statePart.filter((category) => category.id !== action.payload);
        case UPDATE_CATEGORY:
            return statePart.map((category) => category.id === action.payload.id ? action.payload : category);
        default:
            return statePart;
    }
};

export default categoriesReducer;
