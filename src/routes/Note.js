import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import Search from "../components/Common/Search";
import Popularqna from "../components/Common/Popularqna";
import AddNoteBtn from "../components/Common/AddNoteBtn";
import NoteCard from "../components/Note/NoteCard";
import Sort from "../components/Common/Sort";
import NoteWrite from "../components/Note/NoteWrite";
import { Link } from "react-router-dom";

export default function Note() {
  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width="calc(15vw)"
          minWidth="calc(15vw)"
        >
          <Search />
          <Category />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Sort />
          <Link to={"/note/detail"} style={{ textDecoration: "none" }}>
            <NoteCard />
          </Link>
          <Link to={"/note/detail"} style={{ textDecoration: "none" }}>
            <NoteCard />
          </Link>
          <Link to={"/note/detail"} style={{ textDecoration: "none" }}>
            <NoteCard />
          </Link>
          <Link to={"/note/detail"} style={{ textDecoration: "none" }}>
            <NoteCard />
          </Link>
          <Link to={"/note/detail"} style={{ textDecoration: "none" }}>
            <NoteCard />
          </Link>
          <Link to={"/note/detail"} style={{ textDecoration: "none" }}>
            <NoteCard />
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width="calc(18vw)"
          minWidth="calc(18vw)"
        >
          <Link to="/note/newnote" style={{ textDecoration: "none" }}>
            <AddNoteBtn />
          </Link>
          <Popularqna />
          <NoteWrite />
        </Box>
      </Box>
    </Container>
  );
}
