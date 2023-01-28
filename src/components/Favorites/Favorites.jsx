import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Favorites = () => {

    const favorites = useSelector(state => state.favorites)
    console.log(favorites)
    return (
        <div>
            <Navbar />
            <Header title='My Photos' subtitle='Take a look at all your saved photos.' />
        </div>
    )
}

export default Favorites