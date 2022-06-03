import React from 'react'
import { Box } from '@mui/material'

const JobSkill = (skills) => {
  return (
    <Box
      sx={{
        mr: 1.5,
        mb: 1.5,
        px: 2,
        py: 1,
        fontSize: '1.2rem',
        backgroundColor: '#F4F4F4',
        borderRadius: '0.5rem',
      }}
    >
      {skills.title}
    </Box>
  )
}

export default JobSkill
