import React from 'react'
import { Box, Grid, Item } from '@mui/material'

const CardJob = () => {
  return (
    <Box sx={{ width: 452, height: 236, backgroundColor: '#ffffff', p: 4 }}>
      <Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardJob
