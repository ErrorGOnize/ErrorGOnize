import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import Search from "../components/Common/Search";
import Popularqna from "../components/Common/Popularqna";
import AddNoteBtn from "../components/Common/AddNoteBtn";
import NoteCard from "../components/Note/NoteCard";
import Sort from "../components/Common/Sort";
import NoteWrite from "../components/Note/NoteWrite";

export default function Note() {
  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box display="flex" flexDirection="column" gap={3}>
          <Search />
          <Category />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Sort />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <AddNoteBtn />
          <Popularqna />
          <NoteWrite />
        </Box>
      </Box>
    </Container>
  );
}
