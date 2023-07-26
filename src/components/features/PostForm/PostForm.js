import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { useForm } from "react-hook-form";

const PostForm = ({ data, formHandler, buttonTitle }) => {
    const {
        register,
        handleSubmit: validate,
        formState: { errors },
    } = useForm();
    const [formState, setFormState] = useState(data || {});
    const allCategories = useSelector(getAllCategories);

    useEffect(() => {
        if (data) {
            setFormState(data);
        }
    }, [data]);

    const formElements = [
        { name: 'title', title: "Title", type: 'text', placeholder: 'Enter title' },
        { name: 'author', title: "Author", type: 'text', placeholder: 'Enter author' },
        { name: 'publishedDate', title: "Published", type: 'text', placeholder: 'Enter date' },
        {
            name: 'shortDescription',
            title: "Short Description",
            type: 'text',
            placeholder: 'Leave a comment here',
            as: "textarea",
        },
        {
            name: 'content',
            title: "Main content",
            type: 'text',
            placeholder: 'Leave a comment here',
            as: "textarea",
        },
        { name: 'category', title: "Category", options: allCategories },
    ];

    const onChangeHandler = (value, name) => {
        if (value === "") {
            setFormState((prevState) => {
                delete prevState[name];
                return { ...prevState };
            });
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const errorStyles = {
        color: 'red',
    };

    const getElementByName = (el) => {
        if (el.name === 'content') {
            return <ReactQuill
                type={el.type}
                theme={"snow"}
                placeholder={el.placeholder}
                onChange={(value) => onChangeHandler(value, el.name)}
                defaultValue={data?.[el.name]}
            />;
        }
        if (el.name === 'publishedDate') {
            return <DatePicker
                selected={formState?.[el.name]}
                onChange={(value) => onChangeHandler(value, el.name)}
                onSelect={(value) => onChangeHandler(value, el.name)}
            />;
        }
        if (el.name === 'category') {
            return (
                <Form.Control
                    {...register(el.name, { required: true })}
                    as="select"
                    onChange={(e) => onChangeHandler(e.target.value, el.name)}
                    value={formState?.[el.name] || ''}
                >
                    <option value="">Select category</option>
                    {allCategories.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
            );
        }

        return (
            <>
                <Form.Control
                    {...register(el.name, {
                        required: true,
                        minLength: el.name === 'title' || el.name === 'author' ? 3 : el.name === 'shortDescription' ? 20 : undefined,
                    })}
                    type={el.type}
                    placeholder={el.placeholder}
                    as={el.as}
                    onChange={(e) => onChangeHandler(e.target.value, el.name)}
                    defaultValue={data?.[el.name]}
                />
                {errors[el.name] && errors[el.name].type === "required" && (
                    <span style={errorStyles}>This field is required</span>
                )}
                {errors[el.name] && errors[el.name].type === "minLength" && (
                    <span style={errorStyles}>
                        {el.name === 'title' || el.name === 'author' ? "Minimum length is 3 characters" : "Minimum length is 20 characters"}
                    </span>
                )}
            </>
        );
    };

    const onSubmit = (data) => {
        formHandler(data);
    };

    return (
        <div className="post-form">
            <Form onSubmit={validate(onSubmit)}>
                {formElements.map((el) => (
                    <Form.Group key={el.name}>
                        <Form.Label>{el.title}</Form.Label>
                        {getElementByName(el)}
                    </Form.Group>
                ))}
                <Button
                    type="submit"
                    disabled={formState != null && Object.values(formState).every((x) => !x)}
                >
                    {buttonTitle}
                </Button>
            </Form>
        </div>
    );
};

export default PostForm;
