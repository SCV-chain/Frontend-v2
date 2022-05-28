import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import { Box, Stack, Grid, Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import JobSkill from './JobSkill'

const CardJob = () => {
  return (
    <Grid item xs={6}>
      <Card
        sx={{
          backgroundColor: '#ffffff',
          p: 3,
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '1.5rem',
        }}
      >
        <Stack spacing={2.8}>
          <Stack>
            <Grid
              container
              wrap="nowrap"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item sx={{ pr: 1 }}>
                <Box>
                  <Box
                    sx={{
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                      borderRadius: '0.5rem',
                      p: 1.5,
                    }}
                  >
                    <Image src="/ImgJob.png" alt="imageJob" width={48} height={48} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Stack spacing={1} direction="column">
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
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
                      sx={{
                        backgroundColor: 'secondary.main',
                        px: 1,
                        py: 0.5,
                        borderRadius: '0.5rem',
                      }}
                      spacing={0.5}
                    >
                      <StarIcon sx={{ fontSize: 12, color: 'icons.secondary' }} />
                      <Box sx={{ fontSize: 10, color: 'secondary.contrastText' }}>New Jobs</Box>
                    </Stack>
                  </Stack>
                  <Box sx={{ color: 'text.primary', fontWeight: '900' }}>Backend Developer</Box>
                </Stack>
              </Grid>
              <Grid item xs={1}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  sx={{ width: '100%' }}
                >
                  <FavoriteIcon sx={{ fontSize: 19, color: 'primary.main', cursor: 'pointer' }} />
                </Stack>
              </Grid>
            </Grid>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box>
                <StarIcon sx={{ fontSize: 'small', mr: 0.5, color: 'success.light' }} />
                <StarIcon sx={{ fontSize: 'small', mr: 0.5, color: 'success.light' }} />
                <StarIcon sx={{ fontSize: 'small', mr: 0.5, color: 'success.light' }} />
                <StarHalfIcon sx={{ fontSize: 'small', mr: 0.5, color: 'success.light' }} />
                <StarOutlineIcon sx={{ fontSize: 'small', mr: 0.5, color: '#D1F4D3' }} />
              </Box>
              <Box sx={{ color: 'text.primary', fontSize: 12 }}>New York, USA</Box>
            </Stack>
          </Stack>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <JobSkill title="NodeJS" />
            <JobSkill title="NodeJS" />
            <JobSkill title="NodeJS" />
            <JobSkill title="NodeJS" />
            <JobSkill title="NodeJS" />
            <JobSkill title="NodeJS" />
          </Box>

          <Stack direction="row" spacing={3}>
            <Stack direction="row" spacing={0.5}>
              <WorkHistoryIcon sx={{ fontSize: 'large', color: 'icons.basic' }} />
              <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>Full-Time</Box>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <AttachMoneyIcon sx={{ fontSize: 'large', color: 'icons.basic' }} />
              <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>$2k - $3k</Box>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <PersonIcon sx={{ fontSize: 'large', color: 'icons.basic' }} />
              <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>30 Applied</Box>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <AccessTimeFilledIcon sx={{ fontSize: 'large', color: 'icons.basic' }} />
              <Box sx={{ fontSize: '1.2rem', fontWeight: '600' }}>10 Days Left</Box>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  )
}

export default CardJob
