import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Card, Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({ category }) => {
    const allPosts = useSelector(getAllPosts);

    let filteredPosts;

    if (category) {
        filteredPosts = allPosts.filter((post) => post.category === category);
    } else {
        filteredPosts = allPosts;
    }

    return (
        <Row>
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <Col xs="12" md="6" lg="4" key={post.id}>
                        <Card className="mt-4">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    <b>Author: </b>
                                    {post.author}
                                    <br />
                                    <b>Published: </b>
                                    {post.publishedDate.toLocaleDateString()}
                                    <br />
                                    <b>Category: </b>
                                    {post.category}
                                    <br />
                                </Card.Text>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Button variant="primary" as={Link} to={"/post/" + post.id}>
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            ) : (
                <Col>
                    <Alert variant="info">There are no posts in this category.</Alert>
                </Col>
            )}
        </Row>
    );
};

export default Posts;
