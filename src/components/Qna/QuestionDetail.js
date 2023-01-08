import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export default function QuestionDetail({question, date, content, tag}) {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{ borderRadius: 5, width: "calc(40vw)" }}
      border={"5px solid #f3f3f3"}
    >
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Button 
            style={{ color: "#424242" ,backgroundColor: "#f5f5f5"}}>
            {tag}
            </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="baseline">
            <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.2rem"
            color="#FF6A00"
            >
            {question}
            </Typography>
            <Typography
            fontFamily={"Prosto One"}
            fontSize="0.8rem"
            fontWeight={400}
            >
            {date}
            </Typography>
        </Box>
        <Typography fontFamily={"Prosto One"} fontWeight={500}>
            {content}
        </Typography>
      </Box>
  );
}