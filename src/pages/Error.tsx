import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    },[navigate])

    return (
        <div>
            Ooops, you entered wrong page. You will be automaticly redirected
        </div>
    );
};

export default Error;