import { Box, Typography } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import CategoryIcon from '@mui/icons-material/Category';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function Before() {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      flexDirection="column"
      p={3}
      gap={3}
    >
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        sx={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          width: "calc(25vw)",
          height: "calc(20vw)",
          bgcolor: "#575655"
        }}
      >
        <Typography
          mt={7}
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="2rem"
          color="white"
        >
          ErrorGOnize
        </Typography>
        <Typography
          mt={5}
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="2.2rem"
          color="#C6C5C5">
          Error, 복잡한 검색은 X

        </Typography>
        <Typography
          mt={2}
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="2.5rem"
          color="#F2F2F2">
          쉽게 찾고 해결하기
        </Typography>
      </Box>
{/* dash */}
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          borderRadius: 5,
          width: "calc(25vw)",
          height: "calc(10vw)",
          bgcolor: "#E9E9E9"
        }}
      >
        <Typography
           mt={1}
           ml={4}
           fontFamily={"Prosto One"}
           fontWeight={900}
           fontSize="1.2rem"
           color="#a9a9a9"
        >
           업데이트되는 새로운 질문 <UpdateIcon fontSize="large"/>
        </Typography>
        <Typography
           mt={2}
           ml={4}
           fontFamily={"Prosto One"}
           fontWeight={900}
           fontSize="1.5rem"
           >
          몰랐던 Error는 확인
          <br/>
          내가 아는 Error는 답변
        </Typography>
      </Box>
{/* QnA */}
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          borderRadius: 5,
          width: "calc(25vw)",
          height: "calc(8vw)",
          bgcolor: "#E9E9E9"
        }}
      >
        <Typography
           mt={1}
           ml={4}
           fontFamily={"Prosto One"}
           fontWeight={900}
           fontSize="1.2rem"
           color="#a9a9a9"
        >
           카테고리로 분류된 에러 <CategoryIcon fontSize="large"/>
        </Typography>
        <Typography
           mt={2}
           ml={4}
           fontFamily={"Prosto One"}
           fontWeight={900}
           fontSize="1.5rem"
           >
          쉽고 빠른 에러 검색
        </Typography>
      </Box>
{/* note */}
<Box
        display={"flex"}
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          borderRadius: 5,
          width: "calc(25vw)",
          height: "calc(10vw)",
          bgcolor: "#E9E9E9"
        }}
      >
        <Typography
           mt={1}
           ml={4}
           fontFamily={"Prosto One"}
           fontWeight={900}
           fontSize="1.2rem"
           color="#a9a9a9"
        >
           나만의 노트 작성 <NoteAltIcon fontSize="large"/>
        </Typography>
        <Typography
           mt={2}
           ml={4}
           fontFamily={"Prosto One"}
           fontWeight={900}
           fontSize="1.5rem"
           >
          해결된 에러를 기록하여
          <br/>
          나만의 노트 만들기
        </Typography>
      </Box>
    </Box>
  );
}
