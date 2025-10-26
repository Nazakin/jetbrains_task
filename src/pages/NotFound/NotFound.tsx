import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css'

const NotFound: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    },[navigate])

    return (
        <div className={styles.container}>
            Ooops, you entered wrong page. You will be automaticly redirected
        </div>
    );
};

export default NotFound;