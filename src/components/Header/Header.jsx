import { Box, Typography } from '@mui/material'
// import { Box } from '@mui/system'
import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <div>
        <Box mt='30px'>
            <Typography variant='h3' sx={{color: '#007DED'}}>{title}</Typography>
            <Typography variant='subtitle1' sx={{color: '#777777'}}>{subtitle}</Typography>
        </Box>
    </div>
  )
}

export default Header