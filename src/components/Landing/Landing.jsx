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
            <Stack direction='row' justifyContent='flex-start' alignItems='center' sx={{marginLeft: '20px', padding: '10px'}}>
              <TextField label="Search Photos" variant="outlined" name='search' value={search} onChange={e => setSearch(e.target.value)} sx={{height: '50px', width: '410px', letterSpacing: '1px',}} />
              <Link to='/home' style={{ textDecoration: 'none' }}>
                  {/* <button className={s.btn} >See more!</button> */}
                  <Button variant="contained" onClick={handleSearch} sx={{marginLeft: '30px', height: '50px', width: '150px', letterSpacing: '1px',}}>Search!</Button>
              </Link>
            </Stack>
        </div>
    </div>
  )
}

export default Landing