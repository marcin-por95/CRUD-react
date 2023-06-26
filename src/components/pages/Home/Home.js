import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from "../../features/Posts/Posts";


const Home = () => {
    return (
        <>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <h1>All Posts</h1>
                    <Button className='mb-3' variant='outline-primary' as={Link} to={'/post/add'}>Add post</Button>
                </Col>
            </Row>
            <Posts />
        </>
    )
}

export default Home;