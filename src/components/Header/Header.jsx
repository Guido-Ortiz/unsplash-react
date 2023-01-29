import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ title, subtitle }) => {
  return (
    <Box mt='30px' sx={{ marginLeft: '30px' }}>
      <Typography variant='h3' sx={{ color: '#007DED' }}>{title}</Typography>
      <Typography variant='subtitle1' sx={{ color: '#777777' }}>{subtitle}</Typography>
    </Box>
  )
}

export default Header