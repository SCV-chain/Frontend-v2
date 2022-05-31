import React from 'react'
import { Box, Stack, Container } from '@mui/material'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined'
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import { menuTop } from '../../Data'
import Image from 'next/image'

const TopMenu = () => {
  return (
    <Container>
      <Stack spacing={3} direction="row" justifyContent="center">
        {menuTop.map((menu) => (
          <Stack
            key={menu.index}
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
            sx={{
              width: 100,
              height: 100,
              bgcolor: '#ffffff',
              p: 1.5,
              borderRadius: '2rem',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image src={menu.icon} alt={menu.label} width={28} height={28} />
            <Box sx={{ fontSize: '1.2rem' }}> {menu.label}</Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  )
}

export default TopMenu
