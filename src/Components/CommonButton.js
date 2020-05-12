import React from 'react';
import { Button } from 'react-bootstrap';
 
const CommonButton = (props) => {
    const { title, onClick, variant, className } = props;
    return (
        <Button
            variant={variant}
            onClick={onClick}
            height={10}
            className={className}
        >
            {title}
        </Button>
    );
}
 
export default CommonButton;