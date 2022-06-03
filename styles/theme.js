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
      main: '#ff457c',
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
      main: '#fcd036',
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
      main: '#6bda70',
      light: '#63E068',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    text: {
      primary: '#4A4950',
      secondary: '#666666',
      contrastText: '#F9FAFF',
    },
    icons: {
      primary: '#63E068',
      secondary: '#FDD95E',
      basic: '#E7E7E7',
      start: '#635BFF',
    },
    card: {
      primary: '#F5F5F5',
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
