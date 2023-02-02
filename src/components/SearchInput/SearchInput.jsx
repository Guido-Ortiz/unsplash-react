import React, { useEffect, useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { filterPhoto, searchPhotoDescription } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const SearchInput = () => {
    
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchPhotoDescription(search))
    }

    // useEffect(() => {
    //     window.addEventListener('keydown', e => { //keypress
    //         // console.log(e.key)
    //         dispatch(filterPhoto(search))
    //       }); 
    // }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(searchPhotoDescription(search))
    }

    return (
        <div>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {md: 400, xs: 250}, border: 'none', marginLeft: {xs: '30px', md: '60px'}, marginBottom: '20px' }}>
                <InputBase placeholder="Search photo descriptions..." inputProps={{ 'aria-label': 'search photos' }} sx={{ ml: 1, flex: 1 }} name='search' value={search} 
                // onChange={e => setSearch(e.target.value)}
                onChange={handleChange} 
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default SearchInput