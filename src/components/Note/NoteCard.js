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
      <Typography
        fontFamily={"Prosto One"}
        fontWeight={900}
        fontSize="1.2rem"
        color="#FF6A00"
      >
        React - Typescript 정리
      </Typography>
      <Typography fontFamily={"Prosto One"} fontWeight={500}>
        백업파일 실행 중 이런 에러가 뜨는데 어떻게 해결할 수 있을까요?
      </Typography>
      <Typography fontFamily={"Prosto One"} fontWeight={300}>
        조회수 59 답변 8
      </Typography>
    </Box>
  );
}
