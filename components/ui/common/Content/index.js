import { Stack, Grid } from 'node_modules/@mui/material/index'
import React from 'react'
import CardJob from './CardJob/CardJob'
import TopMenu from './TopMenu/TopMenu'

const Contents = () => {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Stack spacing={4}>
          <TopMenu />
          <Stack direction="row" justifyContent="center" spacing={4}>
            <CardJob />
            <CardJob />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default Contents
