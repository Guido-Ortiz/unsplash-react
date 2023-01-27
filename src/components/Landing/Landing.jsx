import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import s from './Landing.module.css';
import { searchPhotos } from '../../redux/actions/actions';

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
            <div>
              <TextField label="Outlined" variant="outlined" name='search' value={search} onChange={e => setSearch(e.target.value)} />
              <Link to='/home' style={{ textDecoration: 'none' }}>
                  <button className={s.btn} onClick={handleSearch}>See more!</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Landing