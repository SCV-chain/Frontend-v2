import { BaseLayout } from "@components/ui/layout";
import { Typography, Button, Container, Box } from "@mui/material";

export default function Index() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" color="primary" gutterBottom>
         SCV-chain
        </Typography>
        <Button variant="contained" color="primary">
          Connect
        </Button>
      </Box>
    </Container>
  );
}

Index.Layout = BaseLayout;
