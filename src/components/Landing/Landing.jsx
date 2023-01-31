import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchPhotos } from '../../redux/actions/actions';
import { Button, Stack, TextField } from '@mui/material';
import s from './Landing.module.css';

const Landing = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(searchPhotos(search))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <div className={s.title}>Unsplash Photos</div>
          <div className={s.subtitle}>Internets photo source.</div>
          <div className={s.subtitle}>With resources from creators around the world.</div>
        </div>
        <Stack
          sx={{
            marginLeft: '20px', padding: '10px', display: { xs: 'column' },
            flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'flex-start', alignItems: { md: 'center', xs: 'flex-start'}, width: {xs: '80%'}
          }}>
          <TextField label="Search Photos" variant="outlined" name='search' value={search} onChange={e => setSearch(e.target.value)}
            sx={{ height: '50px', width: {md:'410px', xs: '100%'}, letterSpacing: '1px' }} />
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={handleSearch}
              sx={{ marginLeft: {md: '30px', xs: '0px'}, height: '50px', width: {md:'150px', xs: '260px'}, letterSpacing: '1px', marginTop: {xs: '20px'}}}>
              Search!
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  )
}

export default Landing