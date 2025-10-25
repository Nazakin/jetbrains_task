import React from 'react';
import Header from '../components/Header/Header';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const Home: React.FC = () => {
    return (
        <>
        <Header />
        <CategoriesList />
        </>
    );
};

export default Home;