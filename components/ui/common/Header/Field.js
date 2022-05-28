import React from 'react'
import { Autocomplete, Box, InputBase } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

const Field = (props) => {
  return (
    <Autocomplete
      disablePortal
      id={props.id}
      options={props.filter}
      renderInput={(params) => (
        <Box ref={params.InputProps.ref}>
          <InputBase
            {...params.inputProps}
            sx={{
              width: 128,
              height: 31,
              border: 0,
              borderRadius: 2.5,
              bgcolor: 'secondary.contrastText',
              color: 'primary.contrastText',
              p: 1,
            }}
            placeholder={props.label}
            endAdornment={<KeyboardArrowDown />}
          />
        </Box>
      )}
    />
  )
}

export default Field
