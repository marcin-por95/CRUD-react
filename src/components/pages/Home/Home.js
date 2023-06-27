import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from "../../features/Posts/Posts";


const Home = () => {
    return (
        <>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <h1>All Posts</h1>
                  <Link to={'/post/add'}>
                    <Button className='mb-3' variant='outline-primary'>Add post</Button>
                  </Link>
                </Col>
            </Row>
            <Posts />
        </>
    )
}

export default Home;
