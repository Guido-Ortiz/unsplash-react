import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchPhotoDescription } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const SearchInput = () => {
    
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchPhotoDescription(search))
    }

    return (
        <div>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, border: 'none', marginLeft: '30px', marginBottom: '20px' }}>
                <InputBase placeholder="Search photo descriptions..." inputProps={{ 'aria-label': 'search photos' }} sx={{ ml: 1, flex: 1 }} name='search' value={search} onChange={e => setSearch(e.target.value)} />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default SearchInput