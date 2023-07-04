import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({data, formHandler, buttonTitle}) => {
    const [formState, setFormState] = useState(data);
    const formElements = [
        {name: 'title', title: "Title", type: 'text', placeholder: 'Enter title'},
        {name: 'author', title: "Author", type: 'text', placeholder: 'Enter author'},
        {name: 'publishedDate', title: "Published", type: 'text', placeholder: 'Enter date'},
        {
            name: 'shortDescription',
            title: "Short Description",
            type: 'text',
            placeholder: 'Leave a comment here',
            as: "textarea"
        },
        {name: 'content', title: "Main content", type: 'text', placeholder: 'Leave a comment here', as: "textarea"},
    ];
    const onChangeHandler = (value, name) => {
        if (value === "") {
            setFormState((prevState) => {
                delete prevState[name];
                return {...prevState};
            });
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const getElementByName = (el) => {
        if (el.name === 'content') {
            return <ReactQuill
                type={el.type}
                theme={"snow"}
                placeholder={el.placeholder}
                onChange={(value) => onChangeHandler(value, el.name)}
                defaultValue={data?.[el.name]}
            />
        }
        if (el.name === 'publishedDate') {
            return <DatePicker selected={formState?.[el.name]}
                               onChange={(value) => onChangeHandler(value, el.name)}
                               onSelect={(value) => onChangeHandler(value, el.name)}/>
        }
        return <Form.Control
            type={el.type}
            placeholder={el.placeholder}
            as={el.as}
            onChange={(e) => onChangeHandler(e.target.value, el.name)}
            defaultValue={data?.[el.name]}
        />
    }

    return (
        <div className="post-form">
            <Form>
                {formElements.map((el) => (
                    <Form.Group key={el.name}>
                        <Form.Label>{el.title}</Form.Label>
                        {getElementByName(el)}
                    </Form.Group>
                ))}
                <Button
                    onClick={() => formHandler(formState)}
                    disabled={formState != null && Object.values(formState).every((x) => !x)}
                >
                    {buttonTitle}
                </Button>
            </Form>
        </div>
    );
};

export default PostForm;
