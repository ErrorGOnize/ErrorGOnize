import { Box, Button, Container, Typography } from "@mui/material";
import Category from "../components/Note/Category";
import Popularqna from "../components/Common/Popularqna";
import AddNoteBtn from "../components/Common/AddNoteBtn";
import NoteWrite from "../components/Note/NoteWrite";
import { Link, useParams } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailNote() {
  const { noteNo } = useParams();

  const [note, setNote] = useState([]);
  const [date, setDate] = useState("");

  const getNote = async () => {
    const info = await axios.get(`http://localhost:8080/note/${noteNo}`);
    setNote(info.data);
    setDate(info.data.regdate.split("T")[0]);
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <Container sx={{ pt: 3, mb: 3, display: "flex", gap: 6 }}>
      <Box display="flex" flexDirection="column" gap={3} minWidth="calc(15vw)">
        <Link to="/note/newnote" style={{ textDecoration: "none" }}>
          <AddNoteBtn />
        </Link>
        <Category />
      </Box>
      <Box display="flex" flexDirection="column" gap={3} minWidth="calc(40vw)">
        <Box
          display={"flex"}
          flexDirection="column"
          p={3}
          sx={{
            borderRadius: 5,
            // width: "calc(38vw)"
          }}
          border={"5px solid #f3f3f3"}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Box display="flex" gap={2} alignItems="center">
              <Button
                onClick={() => {
                  window.history.back();
                }}
              >
                <NavigateBeforeIcon sx={{ color: "#888" }} />
              </Button>
              <Typography
                fontFamily={"Prosto One"}
                fontWeight={900}
                fontSize="1.2rem"
                color="#FF6A00"
                pt={0.5}
              >
                {note.noteTitle}
              </Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Typography
                fontFamily={"Prosto One"}
                fontSize="0.8rem"
                fontWeight={400}
                color="#222"
              >
                {note.writer}
              </Typography>
              <Typography
                fontFamily={"Prosto One"}
                fontSize="0.8rem"
                fontWeight={400}
                color="#222"
              >
                {date}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap={1} justifyContent="flex-end" mt={1}>
            <Typography
              fontFamily={"Prosto One"}
              color="#222"
              fontSize="0.8rem"
            >
              조회수 {note.viewCnt}
            </Typography>
            <Typography
              fontFamily={"Prosto One"}
              color="#222"
              fontSize="0.8rem"
            >
              좋아요 {note.likedCnt}
            </Typography>
          </Box>
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={500}
            color="#222"
            mt={3}
          >
            {note.noteContent}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={3} minWidth="calc(15vw)">
        <Popularqna />
        <NoteWrite />
      </Box>
    </Container>
  );
}
