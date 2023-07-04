import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getAllCategories } from '../../../redux/categoriesRedux';


const Categories = () => {
    const categories = useSelector(getAllCategories);

    return (
        <div style={{ width: '70%' }} className="m-auto">
            <h1>Categories</h1>
            {categories.map((category, index) => (
                <ListGroup.Item key={index}>
                    <Link to={"/categories/" + category}>{category}</Link>
                </ListGroup.Item>
            ))}
        </div>
    );
};

export default Categories;