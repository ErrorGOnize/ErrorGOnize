import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NoteWrite() {
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
          π§ λΈνΈλ μ΄λ»κ²? π§
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={400}>
        κ°λ°νλ€κ° λ°μν μλ¬λ₯Ό
        <br />
        μ λ¦¬ν λΈνΈλ₯Ό μ¬λ¦¬μκ±°λ,
        <br />
        <br />
        κ°λ°μ κ΄λ ¨λ Tipμ
        <br />
        κ³΅μ ν΄μ£Όμλ©΄ λ©λλ€.
        <br />
        <br />
        μλμ μμλ₯Ό μ°Έκ³ ν΄μ
        <br />
        λΈνΈλ₯Ό μμ±ν΄λ³΄μΈμ!
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ fontSize: "1.4rem" }}>π</Typography>
        <a
          target="_blank"
          href="https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F"
        >
          <Typography>μμ 1</Typography>
        </a>
      </Box>
      {/* <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ fontSize: "1.4rem" }}>π</Typography>
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-google-login"
        >
          <Typography>μμ 2</Typography>
        </a>
      </Box> */}
    </Box>
  );
}
