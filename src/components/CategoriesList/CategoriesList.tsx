import React, { useEffect, useState } from 'react';
import styles from './CategoriesList.module.css';
import { useFetch } from '../../hooks/useFetch';
import { CategoriesResponse, Category } from '../../types';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

const CategoriesList: React.FC = () => {
  const { data, error, loading } = useFetch<CategoriesResponse>(
    "https://opentdb.com/api_category.php"
  );

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data?.trivia_categories) {
      setCategories(data.trivia_categories);
    }
  }, [data]);

  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Loader</div>;

  return (
    <div className={styles.categoriesListContainer}>
      <h3 className={styles.categoriesListTitle}>Category Filter</h3>
      <div className={styles.categoriesList}>
        <CategoriesItem name="All Categories" />
        {categories.map(category => (
          <CategoriesItem name={category.name} id={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
