import { Stack, Grid } from '@mui/material'
import React from 'react'
import CardJob from './CardJob'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'

const Contents = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <LeftMenu />
      </Grid>
      <Grid item xs={9}>
        <Stack spacing={4}>
          <TopMenu />
          <Grid container spacing={4}>
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}

export default Contents
