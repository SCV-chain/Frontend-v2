import React from 'react'
import { Box, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import AddIcon from '@mui/icons-material/Add'
import { menuLeft } from '../../Data/index'
import Image from 'next/image'

const LeftMenu = () => {
  return (
    <Stack spacing={4} justifyContent="center" alignItems="center">
      {menuLeft.map((menu, i) => (
        <Stack alignItems="center" key={i}>
          <Image width={28} height={28} src={menu.icon} alt={menu.label} />
          <Box sx={{ fontSize: '1.4rem' }}>{menu.label}</Box>
        </Stack>
      ))}
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
