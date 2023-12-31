import PostForm from "../../features/PostForm/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPostById } from "../../../redux/postsRedux";
import { getFilteredCategories } from "../../../redux/categoriesRedux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React from 'react';

const EditPost = () => {
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCategories = useSelector(state => getFilteredCategories(state, postData.category));

    const formHandler = (state) => {
        dispatch(editPost(state));
        navigate('/');
    }

    if (!postData) {
        return <Navigate to="/"/>
    }

    return (
        <>
            <h1>Edit Post</h1>
            <PostForm data={postData} formHandler={formHandler} buttonTitle="Edit post" allCategories={allCategories} />
        </>
    );
}

export default EditPost;
