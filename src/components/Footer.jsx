import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt={'80px'} bgcolor={'#fff3f4'}>
      <Stack gap={'30px'} alignItems={'center'} px={'40px'} pt={'24px'}>
        <img src={Logo} alt="logo"/>
        <Typography sx={{fontSize: {lg: '25px', xs: '20px'}}} pb={'40px'}>
          Made with ❤️ by Dhruvil Modi
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer