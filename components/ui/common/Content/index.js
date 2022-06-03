import { Stack, Grid, Box } from '@mui/material'
import React from 'react'
import CardJob from './CardJob'
import CompanyCard from './CompanyCard'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'
import UserCard from './UserCard'

const Contents = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <LeftMenu />
      </Grid>
      <Grid item xs={8}>
        <Stack spacing={4}>
          <TopMenu />
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
          </Grid>
          <Stack spacing={1.5}>
            <Box sx={{ fontSize: '3.2rem', lineHeight: '3.8rem', fontWeight: '600', pl: 4 }}>
              Top Company
            </Box>
            <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </Grid>
          </Stack>
          <Stack spacing={1.5}>
            <Box sx={{ fontSize: '3.2rem', lineHeight: '3.8rem', fontWeight: '600', pl: 4 }}>
              Top Developer
            </Box>
            <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
              <UserCard />
              <UserCard />
              <UserCard />
            </Grid>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default Contents
