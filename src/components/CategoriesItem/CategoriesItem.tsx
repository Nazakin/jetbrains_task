import React from 'react';
import styles from './CategoriesItem.module.css'
import { Category } from '../../types';
import { useCleanName } from '../../hooks/useCleanName';

const CategoriesItem: React.FC<Category> = ({id, name}) => {

    const clearName = useCleanName(name);
    return (
        <button className={styles.CategoriesItemContainer}>
            <span>{clearName}</span>
        </button>
    );
};

export default CategoriesItem;