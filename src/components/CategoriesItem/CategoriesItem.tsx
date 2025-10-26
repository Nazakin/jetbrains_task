import React from 'react';
import { CategoryItem } from '../../types';
import { cleanName } from '../../utils/cleanName';
import Button from '../ui/Button';



const CategoriesItem: React.FC<CategoryItem> = ({id, name, handleClick, selected}) => {

    const clearName = cleanName(name);
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