import { Box, Typography } from "@mui/material";

export default function QnaWrite() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{
        borderRadius: 5,
      }}
      border={"5px solid #f3f3f3"}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={800}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          π§ Q&Aλ μ΄λ»κ²? π§
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={400}>
        κ°λ°νλ€κ° λͺ¨λ₯΄κ±°λ
        <br />
        κΆκΈν κ²μ΄ μκ²Όμ λ
        <br />
        μ§λ¬Έμ μ¬λ¦¬μλ©΄ λ©λλ€.
        <br />
        <br />
        μ§λ¬Έμ λν λ΅μ μμλ©΄
        <br />
        λ΅λ³μ λ¬μμ£Όμλ©΄ λ©λλ€.
        <br />
        <br />
        μλμ μμλ₯Ό μ°Έκ³ ν΄μ
        <br />
        Q&Aλ₯Ό μμ±ν΄λ³΄μΈμ!
      </Typography>
    </Box>
  );
}
