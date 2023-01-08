import { Box, Button, Container, Typography } from "@mui/material";
import Category from "../components/Note/Category";
import Popularqna from "../components/Common/Popularqna";
import AddNoteBtn from "../components/Common/AddNoteBtn";
import NoteWrite from "../components/Note/NoteWrite";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function DetailNote() {
  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box display="flex" flexDirection="column" gap={3}>
          <Link to="/note/newnote" style={{ textDecoration: "none" }}>
            <AddNoteBtn />
          </Link>
          <Category />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Box
            display={"flex"}
            flexDirection="column"
            p={3}
            gap={3}
            sx={{ borderRadius: 5, width: "calc(38vw)" }}
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
                  React - Typescript 정리
                </Typography>
              </Box>
              <Typography
                fontFamily={"Prosto One"}
                fontSize="0.8rem"
                fontWeight={400}
                color="#222"
              >
                2023-01-05
              </Typography>
            </Box>

            <Typography fontFamily={"Prosto One"} fontWeight={500} color="#222">
              MUI offers a comprehensive suite of UI tools to help you ship new
              features faster. Start with Material UI, our fully-loaded
              component library, or bring your own design system to our
              production-ready components. MUI offers a comprehensive suite of
              UI tools to help you ship new features faster. Start with Material
              UI, our fully-loaded component library, or bring your own design
              system to our production-ready components. MUI offers a
              comprehensive suite of UI tools to help you ship new features
              faster. Start with Material UI, our fully-loaded component
              library, or bring your own design system to our production-ready
              components. MUI offers a comprehensive suite of UI tools to help
              you ship new features faster. Start with Material UI, our
              fully-loaded component library, or bring your own design system to
              our production-ready components.
              <br />
              <br />
              MUI offers a comprehensive suite of UI tools to help you ship new
              features faster. Start with Material UI, our fully-loaded
              component library, or bring your own design system to our
              production-ready components.MUI offers a comprehensive suite of UI
              tools to help you ship new features faster. Start with Material
              UI, our fully-loaded component library, or bring your own design
              system to our production-ready components. MUI offers a
              comprehensive suite of UI tools to help you ship new features
              faster. Start with Material UI, our fully-loaded component
              library, or bring your own design system to our production-ready
              components.MUI offers a comprehensive suite of UI tools to help
              you ship new features faster. Start with Material UI, our
              fully-loaded component library, or bring your own design system to
              our production-ready components.
            </Typography>
            <Typography fontFamily={"Prosto One"} fontWeight={300} color="#222">
              조회수 59
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Popularqna />
          <NoteWrite />
        </Box>
      </Box>
    </Container>
  );
}
