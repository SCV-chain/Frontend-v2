import React from 'react'
import { Box, Container, Stack, Button, Grid } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import Image from 'next/image'

const CompanyCard = () => {
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
          <Image src="/img_company.svg" width={290} height={100} />
          <Box
            sx={{
              p: 1,
              borderRadius: '50%',
              backgroundColor: 'error.contrastText',
              transform: 'translateY(-4rem)',
              width: 74,
              height: 74,
            }}
          >
            <Image src="/ImgJob.png" width={55} height={55} />
          </Box>
          <Stack sx={{ transform: 'translateY(-3rem)' }} spacing={2}>
            <Stack direction="column" alignItems="center">
              <Box sx={{ fontSize: '1.4rem', fontWeight: 600 }}>SONY</Box>
              <Box sx={{ fontSize: '1.2rem' }}>California, USA</Box>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Box>
                  <StarIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'icons.start' }} />
                  <StarIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'icons.start' }} />
                  <StarIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'icons.start' }} />
                  <StarHalfIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'icons.start' }} />
                  <StarOutlineIcon sx={{ fontSize: '1.2rem', mr: 0.5, color: 'icons.start' }} />
                </Box>
              </Stack>
            </Stack>
            <Stack spacing={1.5} direction="row" alignItems="center">
              <Box
                sx={{
                  p: 2,
                  textAlign: 'center',
                  backgroundColor: 'secondary.main',
                  color: 'text.contrastText',
                  borderRadius: '1rem',
                }}
              >
                <Box sx={{ fontSize: '1.6rem' }}>Hiring</Box>
                <Box sx={{ fontSize: '1.6rem' }}>10</Box>
              </Box>
              <Box
                sx={{
                  p: 2,
                  textAlign: 'center',
                  backgroundColor: 'info.contrastText',
                  borderRadius: '1rem',
                }}
              >
                <Box sx={{ fontSize: '1.6rem' }}>Reviews</Box>
                <Box sx={{ fontSize: '1.6rem' }}>10K</Box>
              </Box>
              <Box
                sx={{
                  p: 2,
                  textAlign: 'center',
                  backgroundColor: 'info.contrastText',
                  borderRadius: '1rem',
                }}
              >
                <Box sx={{ fontSize: '1.6rem' }}>Salaries</Box>
                <Box sx={{ fontSize: '1.6rem' }}>10K</Box>
              </Box>
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

export default CompanyCard
