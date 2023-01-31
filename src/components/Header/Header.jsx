import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ title, subtitle }) => {
  return (
    <Box sx={{ marginLeft: {xs: '20px', md: '60px'}, marginTop: {xs: '20px', md: '30px'} }}>
      <Typography sx={{ color: '#007DED', fontSize: {xs: '2rem', md: '2.5rem'} }}>{title}</Typography>
      <Typography sx={{ color: '#777777', fontSize: {xs: '1rem', md: '1.8rem'} }}>{subtitle}</Typography>
    </Box>
  )
}

export default Header