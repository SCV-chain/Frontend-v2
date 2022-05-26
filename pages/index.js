import { BaseLayout } from '@components/ui/layout'
import { Box, Container } from '@mui/material'
import Contents from './../components/ui/common/Content/index'

export default function Index() {
  return (
    <Container maxWidth="xl" sx={{ height: `calc(100vh - 100px)`, overflow: 'auto' }}>
      <Box sx={{ my: 4 }}>hahaah</Box>
    </Container>
  )
}

Index.Layout = BaseLayout
