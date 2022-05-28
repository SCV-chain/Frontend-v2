import React from 'react'
import { Box, Stack, Container } from 'node_modules/@mui/material/index'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined'
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'

const TopMenu = () => {
  return (
    <Container>
      <Stack spacing={3} direction="row" justifyContent="center">
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <TerminalOutlinedIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Programming</Box>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <BrushOutlinedIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Design</Box>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <VolumeUpIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Marketing</Box>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <AccountBalanceOutlinedIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Marketing</Box>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <HighlightOutlinedIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Creative</Box>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <ArchitectureOutlinedIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Engineer</Box>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{ width: 100, height: 100, bgcolor: '#ffffff', p: 1.5, borderRadius: '2rem' }}
        >
          <BusinessOutlinedIcon sx={{ width: 28, height: 28 }} />
          <Box sx={{ fontSize: '1.2rem' }}> Office</Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default TopMenu
