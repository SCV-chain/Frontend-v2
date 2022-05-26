import SearchIcon from '@mui/icons-material/Search'
import { Person } from 'node_modules/@mui/icons-material/index'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from 'node_modules/@mui/material/index'
import Image from 'node_modules/next/image'
import React from 'react'
import Field from './Field'
import { CATEGORY, EXPERIENCE, POSITION, WORK_PLACE, WORK_TYPE } from './filter'

export default function Header() {
  return (
    <Box
      backgroundColor="primary.main"
      sx={{
        height: 123,
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" pt={2}>
          <Grid item xs={2}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Image src="/talio_logo_1.png" alt="logo" width={40} height={41} />
              <Typography
                sx={{
                  lineHeight: 1,
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#F9FAFF',
                }}
                component="h2"
                variant="h4"
              >
                TALIO
              </Typography>
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
                        width: 36,
                        height: 36,
                        backgroundColor: 'primary.dark',
                        color: '#ffffff',
                        mb: 0.7,
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
                  width: 148,
                  height: 38,
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
      </Container>
    </Box>
  )
}
