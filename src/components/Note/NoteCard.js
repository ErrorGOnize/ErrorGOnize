import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NoteCard() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{ borderRadius: 5, width: "calc(40vw)" }}
      border={"5px solid #f3f3f3"}
    >
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          React - Typescript 정리
        </Typography>
        <Typography
          fontFamily={"Prosto One"}
          fontSize="0.8rem"
          fontWeight={400}
        >
          2023-01-05
        </Typography>
      </Box>

      <Typography fontFamily={"Prosto One"} fontWeight={500}>
        MUI offers a comprehensive suite of UI tools to help you ship new
        features faster. Start with Material UI, our fully-loaded component
        library, or bring your own design system to our production-ready
        components.
      </Typography>
      <Typography fontFamily={"Prosto One"} fontWeight={300}>
        조회수 59
      </Typography>
    </Box>
  );
}
