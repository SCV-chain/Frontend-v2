import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import { Box, Stack } from '@mui/material'
import { Card } from 'node_modules/@mui/material/index'
import Image from 'node_modules/next/image'
import React from 'react'
import TopMenu from '../TopMenu/TopMenu'

const CardJob = () => {
  return (
    <Card
      sx={{
        width: 452,
        height: 263,
        backgroundColor: '#ffffff',
        p: 3,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '1.5rem',
      }}
    >
      <Stack spacing={3}>
        <Stack>
          <Stack direction="row" spacing={1.5}>
            <Box>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                  borderRadius: '0.5rem',
                  p: 1.5,
                }}
              >
                <Image src="/ImgJob.png" alt="imageJob" width={48} height={48} />
              </Box>
            </Box>
            <Stack spacing={1} direction="column">
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ pt: 1 }}
              >
                <Box
                  sx={{
                    fontSize: '1.4rem',
                    fontWeight: '500',
                    color: 'text.secondary',
                  }}
                >
                  Vinmeo LLC
                </Box>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ backgroundColor: '#FA5183', px: 1, py: 0.5, borderRadius: '0.5rem' }}
                  spacing={0.5}
                >
                  <StarIcon sx={{ width: 12, height: 12, color: '#FDD95E' }} />
                  <Box sx={{ fontSize: 10, color: '#FAFAFA' }}>New Jobs</Box>
                </Stack>
              </Stack>
              <Box sx={{ color: 'text.primary', fontWeight: '900' }}>Backend Developer</Box>
            </Stack>
            <Box
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ pl: 14, pt: 3 }}
            >
              <FavoriteIcon sx={{ color: '#896EFF', cursor: 'pointer' }} />
            </Box>
          </Stack>
          <Stack spacing={1.5} direction="row" sx={{ mt: 1 }}>
            <Box>
              <StarIcon sx={{ width: 11.29, height: 11.13, mr: 0.5, color: '#63E068' }} />
              <StarIcon sx={{ width: 11.29, height: 11.13, mr: 0.5, color: '#63E068' }} />
              <StarIcon sx={{ width: 11.29, height: 11.13, mr: 0.5, color: '#63E068' }} />
              <StarHalfIcon sx={{ width: 11.29, height: 11.13, mr: 0.5, color: '#63E068' }} />
              <StarOutlineIcon sx={{ width: 11.29, height: 11.13, mr: 0.5, color: '#D1F4D3' }} />
            </Box>
            <Box sx={{ color: 'text.primary', fontSize: 12 }}>New York, USA</Box>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1.5} sx={{ width: '40.4rem' }}>
          <Box
            sx={{
              px: 2,
              py: 0.5,
              fontSize: '1.2rem',
              backgroundColor: '#F4F4F4',
              borderRadius: '0.5rem',
            }}
          >
            NodeJS
          </Box>
          <Box
            sx={{
              px: 2,
              py: 0.5,
              fontSize: '1.2rem',
              backgroundColor: '#F4F4F4',
              borderRadius: '0.5rem',
            }}
          >
            NodeJS
          </Box>
          <Box
            sx={{
              px: 2,
              py: 0.5,
              fontSize: '1.2rem',
              backgroundColor: '#F4F4F4',
              borderRadius: '0.5rem',
            }}
          >
            CGP (Google Cloud Platform)
          </Box>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={0.5}>
            <WorkHistoryIcon sx={{ width: 16, height: 16, color: '#E7E7E7' }} />
            <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>Full-Time</Box>
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <AttachMoneyIcon sx={{ width: 16, height: 16, color: '#E7E7E7' }} />
            <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>$2k - $3k</Box>
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <PersonIcon sx={{ width: 16, height: 16, color: '#E7E7E7' }} />
            <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>30 Applied</Box>
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <AccessTimeFilledIcon sx={{ width: 16, height: 16, color: '#E7E7E7' }} />
            <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>10 Days Left</Box>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default CardJob
