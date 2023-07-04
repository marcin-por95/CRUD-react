import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilteredCategories } from '../../../redux/categoriesRedux';

import { Row, Alert, Container} from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Posts from "../Posts/Posts";

const SingleCategory = () => {
    const { category } = useParams();
    const categoriesData = useSelector((state) =>
        getFilteredCategories(state, category)
    );

    if (!categoriesData) return <Navigate to="/categories/" />;

    return (
        <Container>
            <Row className="justify-content-between">
                {categoriesData.length > 0 ? (
                    <Posts category={category} />
                ) : (
                    <Alert variant="info">There are no posts in this category.</Alert>
                )}
            </Row>
        </Container>
    );
};

export default SingleCategory;