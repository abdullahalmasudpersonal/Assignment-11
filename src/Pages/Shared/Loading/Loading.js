import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div /* style={{height:'300px'}} */ className=''>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;