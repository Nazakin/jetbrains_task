import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import Statistics from '../components/Statistics/Statistics';

const Home: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    

    return (
        <>
            <Header />
            <CategoriesList selectCategoryF={setSelectedCategory}/>
            <Statistics categoryId={selectedCategory} />
        </>
    );
};

export default Home;