import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import Search from "../components/Note/Search";

export default function Note() {
  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="column" gap={3}>
        <Search />
        <Category />
      </Box>
    </Container>
  );
}
