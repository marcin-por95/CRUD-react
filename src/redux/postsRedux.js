

// Selectors

// Actions
const createActioName = actionName => 'app/posts/${actionName}';

// Actions creators
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};

export default postsReducer;