import { Box, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import QuizIcon from "@mui/icons-material/Quiz";

export default function DashboardWrite() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{ borderRadius: 5 }}
      border={"5px solid #f3f3f3"}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={800}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          π§ λμλ³΄λλ μ΄λ»κ²? π§
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={400}>
        <AutorenewIcon /> λμλ³΄λμμλ κ°μ₯ μ΅κ·Όμ
        <br />
        κ²μλ μλ¬λ€μ λ³Ό μ μκ³ ,
        <br />
        <br />
        <QuizIcon /> μλ¨μ μ§λ¬Έ μ°½μ ν΅ν΄
        <br />
        μ§λ¬Έμ κ²μν  μ μμ΅λλ€.
        <br />
        <br />
        <Typography fontWeight={900}>
          μλ‘μ΄ μ§λ¬Έκ³Ό λ΅λ³μ μμ±ν΄λ³΄μΈμ!
        </Typography>
      </Typography>
    </Box>
  );
}
