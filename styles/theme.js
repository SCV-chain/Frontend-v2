import { createTheme, responsiveFontSizes } from '@mui/material/styles'
// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#896EFF',
      dark: '#575CE6',
      light: '#575CE9',
      contrastText: '#4A4950',
    },
    secondary: {
      main: '#77CDFE',
      dark: ' #C193F5',
      light: '#FFE345',
      contrastText: '#fafafa',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
  },
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
    fontFamily: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontSize: 14,
    button: {
      fontWeight: 500,
      fontSize: '1.6rem',
    },
  },

  components: {
    // Name of the component
    // MuiButton: {
    // styleOverrides: {
    //   // Name of the slot
    //   root: {
    //     // Some CSS
    //     fontSize: '1rem',
    //   },
    // },
    // },
  },
})

theme = responsiveFontSizes(theme)

export default theme
