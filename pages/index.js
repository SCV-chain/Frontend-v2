import { BaseLayout } from "@components/ui/layout";
import { Button, Container, Box } from "@mui/material";
import Link from "@components/common/Link";

export default function Index() {
  return (
    <Container
      maxWidth="xl"
      sx={{ height: `calc(100vh - 100px)`, overflow: "auto" }}
    >
      <Box sx={{ my: 4 }}>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Button variant="contained" color="primary">
          Connect
        </Button>
      </Box>
    </Container>
  );
}

Index.Layout = BaseLayout;
