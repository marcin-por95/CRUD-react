import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ data, formHandler, buttonTitle }) => {
	const [formState, setFormState] = useState(data);
	const formElements = [
		{ name: 'title', title: "Title", type: 'text', placeholder: 'Enter title' },
		{ name: 'author', title: "Author", type: 'text', placeholder: 'Enter author' },
		{ name: 'publishedDate', title: "Published", type: 'text', placeholder: 'Enter date' },
		{
			name: 'shortDescription',
			title: "Short Description",
			type: 'text',
			placeholder: 'Leave a comment here',
			as: "textarea"
		},
		{ name: 'content', title: "Main content", type: 'text', placeholder: 'Leave a comment here', as: "textarea" },
	];
	const onChangeHandler = (e, name) => {
		const value = e.target.value;
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

	return (
		<div className="post-form">
			<Form>
				{formElements.map((el) => (
					<Form.Group key={el.name}>
						<Form.Label>{el.title}</Form.Label>
						{el.name === 'content' ? (
							<ReactQuill
								type={el.type}
								theme={"snow"}
								placeholder={el.placeholder}
								as={el.as}
								onChange={(value) => onChangeHandler({ target: { value } }, el.name)}
								defaultValue={data?.[el.name]}
							/>
						) : (
							<Form.Control
								type={el.type}
								placeholder={el.placeholder}
								as={el.as}
								onChange={(e) => onChangeHandler(e, el.name)}
								defaultValue={data?.[el.name]}
							/>
						)}
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
