import React from 'react';
import { Form } from 'react-bootstrap';
 
const CommonTextField = (props) => {
    const { value, placeHolder, name, onChange } = props;
    return (
        <Form.Control 
            placeholder={placeHolder}
            value={value}
            className={"text_field"}
            name={name}
            onChange={onChange}
        />
    );
}
 
export default CommonTextField;