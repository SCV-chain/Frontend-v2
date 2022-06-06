import SearchIcon from '@mui/icons-material/Search'
import { Person } from '@mui/icons-material/index'
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Field from './Field'
import { CATEGORY, EXPERIENCE, POSITION, WORK_PLACE, WORK_TYPE } from './filter'

export default function Header() {
  return (
    <Box
      backgroundColor="primary.main"
      sx={{
        p: 3,
      }}
    >
      <Grid container justifyContent="center" alignItems="center" pt={2}>
        <Grid item xs={2}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Image src="/icons/ic_logo_white.svg" alt="logo" width={100} height={41} />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" justifyContent="center">
            <Box
              sx={{
                display: 'flex',
                direction: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
              }}
            >
              <InputBase
                id="search"
                sx={{
                  flex: 1,
                  background: '#ffffff',
                  borderRadius: '3.8rem',
                  height: 48,
                  pl: 2.5,
                  pr: 1,
                  alignItems: 'flex-end',
                }}
                endAdornment={
                  <IconButton
                    sx={{
                      fontSize: 36,
                      backgroundColor: 'primary.dark',
                      color: '#ffffff',
                      mb: 0.5,
                    }}
                  >
                    <SearchIcon sx={{ fontSize: '2.4rem' }} />
                  </IconButton>
                }
                startAdornment={
                  <Typography sx={{ position: 'absolute', top: 1, fontWeight: '600' }}>
                    Jobs
                  </Typography>
                }
                placeholder="What you love to do?"
                inputProp={{}}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row" justifyContent="space-evenly" alignItems="center">
            <Person sx={{ color: '#ffffff', fontSize: '2.85rem' }} />

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                alert('clicked')
              }}
              sx={{
                color: '#F9FAFF',
                fontWeight: '600',
                fontSize: 18,
              }}
            >
              Account
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="center" spacing={1} sx={{ pt: 1.5 }}>
        <Field id="work-place" filter={WORK_PLACE} label="Place to work" />
        <Field id="work-types" filter={WORK_TYPE} label="Work type" />
        <Field id="category" filter={CATEGORY} label="Category" />
        <Field id="position" filter={POSITION} label="Position" />
        <Field id="experience" filter={EXPERIENCE} label="Experience" />
      </Stack>
    </Box>
  )
}
