import PfBtn from "./PfBtn";
import { Box, Button } from "@mui/material";

export default function QuestionBar() {
  return (
    <Box
      sx={{
        p: "10px 10px",
        display: "flex",
        width: "calc(60vw)",
        border: "5px solid #f3f3f3",
        borderRadius: 4,
      }}
    >
      <PfBtn/>
      <Button
        variant="contained"
        sx={{
            margin: 0.8,
            ml: 4,  
            backgroundColor: "#f3f3f3",
            fontWeight: 900,
            fontSize: "1rem",
            width: "calc(50vw)",
            height: "calc(4vw)",
            borderRadius: 4, 
            fontFamily: "Prosto One", 
            letterSpacing: 2,
            color: "#d3d3d3",
            justifyContent: "left" 
    }}
    >
      나누고 싶은 질문이 있으신가요?
    </Button>
    </Box>
  );
}
