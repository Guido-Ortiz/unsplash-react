import React from 'react';
import { useSelector } from 'react-redux';
import Favorite from '../Favorite/Favorite';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SelectOrder from '../SelectOrder/SelectOrder';
import SearchInput from '../SearchInput/SearchInput';
import { Typography, Box } from '@mui/material';
import s from './Favorites.module.css';


const Favorites = () => {

    const favorites = useSelector(state => state.favorites)

    return (
        <div>
            <Navbar />
            <Header title='My Photos' subtitle='Take a look at all your saved photos.' />
            <Box sx={{ padding: '10px 0' }}>
                <SearchInput />
                <Typography variant='subttitle2' sx={{ color: '#777777', marginLeft: '30px' }}>Order your photos by heigth, width, likes or date.</Typography>
                <SelectOrder />
            </Box>

            {
                favorites.length !== 0
                    ? <div className={s.container}>
                        {
                            favorites.map(e => {
                                return (
                                    <div key={e.id}>
                                        <Favorite id={e.id} title={e.description} description={e.alt_description} width={e.width} heigth={e.heigth} likes={e.likes} url_full={e.url_full} url_thumb={e.url_thumb} liked={e.liked} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    : <Typography variant='subtitle1' sx={{ padding: '10px', textAlign: 'center', color: '#fff', margin: '0 30px', marginTop: '30px', background: '#007DED', width: 'auto', letterSpacing: '1px'}}>No Photos saved yet! Search and start adding them to your personal collection.</Typography>
            }
            
        </div>
    )
}

export default Favorites