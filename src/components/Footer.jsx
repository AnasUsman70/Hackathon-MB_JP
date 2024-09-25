import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Box sx={{ padding: '20px', backgroundColor: 'black', color: '#fff', textAlign: 'center' }}>
        <Typography variant="body1">© Mövenpick Hotels All Rights Reserved.</Typography>
        <Typography variant="body2" sx={{ marginTop: '10px' }}>
        Mövenpick Hotels & Resorts ,karachi, pakistan | Phone:  111-655-5121
        </Typography>
      </Box>
    </div>
  )
}

export default Footer