import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const Post = props => {
  
  
  const { id } = useParams()
  const postData = useSelector(state => getPostById(state, id));
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch();
  
  const handleRemove = () => {
	dispatch(removePost(id));
	handleClose();
  }
  
  if (!postData) {
	return <Navigate to="/"/>
  }
  return (
	<>
	  <h1>SinglePost</h1>
	  <div className='d-flex justify-content-center py-3'>
		<Card style={ { width: '33rem' } } className='border-0'>
		  <div className='d-flex justify-content-between'>
			<h2>{ postData.title }</h2>
			<div>
			  <Link key={ props.id } to={ '/post/edit/' + id }>
				<Button variant='outline-info m-1'>Edit</Button>
			  </Link>
			  <Button onClick={ handleShow } variant='outline-danger m-1'>Delete</Button>
			</div>
		  </div>
		  <p><b>Author: </b>{ postData.author }<br/><b>Published: </b>{ postData.publishedDate }</p>
		  <p>{ postData.shortDescription }</p>
		  <p><p dangerouslySetInnerHTML={{ __html: postData.content }} /></p>
		</Card>
	  </div>
	  
	  <Modal show={ show } onHide={ handleClose }>
		<Modal.Header closeButton>
		  <Modal.Title>Are you sure?</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  <p>
			<br/>Are you sure you want to do that?
		  </p>
		</Modal.Body>
		<Modal.Footer>
		  <Button variant="secondary" onClick={ handleClose }>
			Cancel
		  </Button>
		  <Button variant="danger" onClick={ handleRemove }>
			Remove
		  </Button>
		</Modal.Footer>
	  </Modal>
	</>
  )
}
export default Post;
