import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';

const Landing = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <div>
                <div className={s.title}>Unsplash Photos</div>
                <div className={s.subtitle}>Internets photo source.</div>
                <div className={s.subtitle}>With resources from creators around the world.</div>
            </div>
            <Link to='/home' style={{ textDecoration: 'none' }}>
                <button className={s.btn}>See more!</button>
            </Link>
        </div>
    </div>
  )
}

export default Landing