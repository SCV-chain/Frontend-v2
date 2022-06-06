import React from 'react'
import { Box, Container, Stack, Button, Grid } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import Image from 'next/image'

const UserCard = () => {
  return (
    <Grid item xs={4}>
      <Stack
        sx={{
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'card.primary',
          borderRadius: '1rem',
          pb: 4,
        }}
      >
        <Stack direction="column" alignItems="center">
          <Image src="/img_banner_user.svg" width={290} height={100} />
          <Box
            sx={{
              p: 0.5,
              borderRadius: '50%',
              backgroundColor: 'error.contrastText',
              transform: 'translateY(-4rem)',
              height: 74,
              width: 74,
            }}
          >
            <Image src="/img_user.svg" width={68} height={68} />
          </Box>
          <Stack sx={{ transform: 'translateY(-3rem)' }} spacing={2}>
            <Stack direction="column" alignItems="center">
              <Box sx={{ fontSize: '1.4rem', fontWeight: 600 }}>Michael Ho</Box>
              <Box sx={{ fontSize: '1.2rem' }}>Backend Developer</Box>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Box>
                  <StarIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'success.main' }} />
                  <StarIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'success.main' }} />
                  <StarIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'success.main' }} />
                  <StarHalfIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'success.main' }} />
                  <StarOutlineIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'success.main' }} />
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Box
              sx={{
                py: 0.5,
                px: 2,
                borderRadius: '1rem',
                backgroundColor: 'primary.main',
                fontSize: '1.4rem',
                color: 'text.contrastText',
              }}
            >
              Follow
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  )
}

export default UserCard
