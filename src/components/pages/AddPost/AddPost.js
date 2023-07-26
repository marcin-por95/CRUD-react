import PostForm from "../../features/PostForm/PostForm";
import { addPost } from "../../../redux/postsRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formHandler = (state) => {
	dispatch(addPost(state));
	navigate('/');
  }
  return <>
	<h1>Add Post</h1>
	<PostForm formHandler={formHandler} buttonTitle="Add post"/>
  </>
}

export default AddPost;
