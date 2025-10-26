import React from 'react';
import { CategoryItem } from '../../types';
import { useCleanName } from '../../hooks/useCleanName';
import Button from '../ui/Button';



const CategoriesItem: React.FC<CategoryItem> = ({id, name, handleClick, selected}) => {

    const clearName = useCleanName(name);
    return (
        <Button
      variant={`${selected ? "secondary" : "primary"}`}
      onClick={() => handleClick(id)}
      id={String(id)}
      type='button'
    >
            <span>{clearName}</span>
        </Button>
    );
};

export default CategoriesItem;