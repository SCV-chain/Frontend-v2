import { Contents } from '@components/ui/common/index'
import { BaseLayout } from '@components/ui/layout'
import { Container } from 'node_modules/@mui/material/index'

export default function Index() {
  return (
    <Container maxWidth="xl" sx={{ pt: 4, height: `calc(100vh - 100px)`, overflow: 'auto' }}>
      <Contents />
    </Container>
  )
}

Index.Layout = BaseLayout
