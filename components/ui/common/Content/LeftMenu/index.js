import React from 'react'
import { Box, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import AddIcon from '@mui/icons-material/Add'

const LeftMenu = () => {
  return (
    <Stack spacing={4} justifyContent="center" alignItems="center">
      <Stack alignItems="center">
        <HomeIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>Home</Box>
      </Stack>
      <Stack alignItems="center">
        <PersonRoundedIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>Profile</Box>
      </Stack>
      <Stack alignItems="center">
        <PersonRoundedIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>Jobs</Box>
      </Stack>
      <Stack alignItems="center">
        <PersonRoundedIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>Wallet</Box>
      </Stack>
      <Stack alignItems="center">
        <PersonRoundedIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>Message</Box>
      </Stack>
      <Stack alignItems="center">
        <PersonRoundedIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>Company</Box>
      </Stack>
      <Stack alignItems="center">
        <PersonRoundedIcon sx={{ fontSize: 28 }} />
        <Box sx={{ fontSize: '1.4rem' }}>More</Box>
      </Stack>
      <Stack
        alignItems="center"
        sx={{
          width: 88,
          height: 91.7,
          backgroundColor: 'primary.main',
          borderRadius: '2rem',
          p: 1.5,
        }}
      >
        <AddIcon sx={{ fontSize: 31, color: 'secondary.contrastText' }} />
        <Box sx={{ fontSize: '1.4rem', color: 'secondary.contrastText' }}>CreateCV</Box>
      </Stack>
    </Stack>
  )
}

export default LeftMenu
