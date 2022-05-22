import SearchIcon from '@mui/icons-material/Search'
import { KeyboardArrowDown, Person } from 'node_modules/@mui/icons-material/index'
import {
  Autocomplete,
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
import { CATEGORY, EXPERIENCE, POSITION, WORK_PLACE, WORK_TYPE } from './filter'

export default function Header() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(105.14deg, #574CE6 -43.82%, #C193F5 121.24%)',
        height: 186,
        // position: 'fixed',
        // top: 0,
        // width: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" pt="2.3rem">
          <Grid item xs={2}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Image src="/talio_logo_1.png" alt="logo" width={61} height={62} />
              <Typography
                sx={{
                  lineHeight: 1,
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#F9FAFF',
                }}
                component="h1"
                variant="h3"
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
                    height: '6.3rem',
                    pl: '3rem',
                    pr: '1rem',
                    py: '0.5rem',

                    alignItems: 'flex-end',
                  }}
                  endAdornment={
                    <IconButton
                      sx={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'primary.dark',
                        color: '#ffffff',
                        mb: 0.5,
                      }}
                    >
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  }
                  startAdornment={
                    <Typography sx={{ position: 'absolute', top: 8, fontWeight: '600' }}>
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
            <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
              <Person fontSize="large" sx={{ color: '#ffffff' }} />

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  alert('clicked')
                }}
                sx={{ color: '#F9FAFF', fontWeight: '600' }}
              >
                Connect Account
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: '2.3rem' }}>
          <Autocomplete
            disablePortal
            id="work-place"
            options={WORK_PLACE}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <InputBase
                  {...params.inputProps}
                  sx={{
                    width: 128,
                    height: 34,
                    border: 0,
                    borderRadius: 2.5,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: '14px',
                  }}
                  placeholder="Place to work"
                  endAdornment={<KeyboardArrowDown />}
                />
              </div>
            )}
          />
          <Autocomplete
            disablePortal
            id="work-types"
            options={WORK_TYPE}
            sx={{}}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <InputBase
                  {...params.inputProps}
                  sx={{
                    width: 128,
                    height: 34,
                    border: 0,
                    borderRadius: 2.5,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: 1,
                  }}
                  placeholder="Work Type"
                  endAdornment={<KeyboardArrowDown />}
                />
              </div>
            )}
          />
          <Autocomplete
            disablePortal
            id="category"
            options={CATEGORY}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <InputBase
                  {...params.inputProps}
                  sx={{
                    width: 128,
                    height: 34,
                    border: 0,
                    borderRadius: 2.5,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: 1,
                  }}
                  placeholder="Category"
                  endAdornment={<KeyboardArrowDown />}
                />
              </div>
            )}
          />
          <Autocomplete
            disablePortal
            id="position"
            options={POSITION}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <InputBase
                  {...params.inputProps}
                  sx={{
                    width: 128,
                    height: 34,
                    border: 0,
                    borderRadius: 2.5,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: 1,
                  }}
                  placeholder="Position"
                  endAdornment={<KeyboardArrowDown />}
                />
              </div>
            )}
          />
          <Autocomplete
            disablePortal
            id="experience"
            options={EXPERIENCE}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <InputBase
                  {...params.inputProps}
                  sx={{
                    width: 128,
                    height: 34,
                    border: 0,
                    borderRadius: 2.5,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: 1,
                  }}
                  placeholder="Experience"
                  endAdornment={<KeyboardArrowDown />}
                />
              </div>
            )}
          />
        </Stack>
      </Container>
    </Box>
  )
}
