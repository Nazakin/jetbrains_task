import React, { useCallback, useEffect, useState } from 'react';
import styles from './CategoriesList.module.css';
import { useFetch } from '../../hooks/useFetch';
import { CategoriesResponse, Category } from '../../types';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import Button from '../ui/Button';
import { ALL_CATEGORIES_ID } from '../../consts';

type Props = {
    selectCategoryF: (id: number) => void;
}

const CategoriesList: React.FC<Props> = ({selectCategoryF}) => {
  const { data, error, loading } = useFetch<CategoriesResponse>(
    "https://opentdb.com/api_category.php"
  );

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(ALL_CATEGORIES_ID);

    const handleCategoryPick = useCallback((id: number): void => {
    setSelectedCategory(id);
    selectCategoryF(id);
    }, []);

  useEffect(() => {
    if (data?.trivia_categories) {
      setCategories(data.trivia_categories);
    }
  }, [data]);

  if (error) return <div>Something went wrong</div>;

  return (
    <div className={styles.categoriesListContainer}>
      <h3 className={styles.categoriesListTitle}>Category Filter</h3>
      <div className={styles.categoriesList}>
        {loading ? (
          [1, 2, 3, 4, 5, 6].map((item) => (
            <Button variant="skeleton" key={item} />
          ))
        ) : (categories && categories.length) ? (
          <>
            <CategoriesItem
              name="All Categories"
              id={ALL_CATEGORIES_ID}
              handleClick={handleCategoryPick}
              selected={selectedCategory === ALL_CATEGORIES_ID}
            />
            {categories.map((category) => (
              <CategoriesItem
                key={category.id}
                name={category.name}
                id={category.id}
                handleClick={handleCategoryPick}
                selected={selectedCategory === category.id}
              />
            ))}
          </>
        ) : (
          <p>There are no categories</p>
        )}


      </div>
    </div>
  );
};

export default CategoriesList;
