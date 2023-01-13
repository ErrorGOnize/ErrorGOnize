import { Box, Typography, Container } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import CategoryIcon from '@mui/icons-material/Category';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import img from "../images/vision.jpeg";
import dash1 from "../images/dash1.png";
import note1 from "../images/note1.png";
import qna from "../images/qna.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Before() {
  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box
        display={"flex"}
        alignItems="center"
        flexDirection="column"
        p={3}
        gap={10}
      >
        <Box
          class="img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            width: "calc(45vw)",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 60,
              borderTopRightRadius: 60
            }}
          >
            <Typography
              p={3}
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="2rem"
              color="white"
            >
              ErrorGOnize
            </Typography>
            <Typography
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="2.5rem"
              color="#C6C5C5">
              Error, 복잡한 검색은 X
            </Typography>
            <Typography
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="2.7rem"
              color="#F2F2F2">
              쉽게 찾고 해결하기
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: 50, color: "#C6C5C5" }} />
          </Box>
        </Box>


        {/* ----------------dash---------------------- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRadius: 4,
            bgcolor: "#E9E9E9",
            p: 4,
            width: "calc(45vw)",
            position: "relative",
            top: "calc(1vw)",
            // left: "calc(0vh)",
            zIndex: "modal"
          }}
        >
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.4rem"
            color="#818589"
          >
            <UpdateIcon fontSize="large" /> 업데이트되는 새로운 질문
          </Typography>
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.7rem"
            mt={3}
          >
            몰랐던 Error는 확인
            <br />
            내가 아는 Error는 답변
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "tooltip",
            top: "calc(-40vh)",
            left: "calc(15vw)",
            boxShadow: 10,
            borderRadius: 5
          }}
        >
          <img
            className="dash1"
            src={dash1}
            alt="dash1"
            style={{
              width: "calc(25vw)",
              borderRadius: 30
            }}
          />
        </Box>

        {/* -------------------QnA--------------------- */}
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="flex-start"
          sx={{
            borderRadius: 5,
            width: "calc(45vw)",
            height: "calc(13vw)",
            bgcolor: "#E9E9E9",
            position: "relative",
            top: "calc(-26vh)",
            zIndex: "modal"
          }}
        >
          <Typography
            mt={1}
            ml={4}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.4rem"
            color="#818589"
          >
            <CategoryIcon fontSize="large" /> 카테고리로 분류된 에러
          </Typography>
          <Typography
            mt={4}
            ml={4}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.7rem"
          >
            쉽고 빠른 에러 검색
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "tooltip",
            top: "calc(-70vh)",
            left: "calc(15vw)",
            boxShadow: 10,
            borderRadius: 5
          }}

        >
          <img
            className="qna"
            src={qna}
            alt="qna"
            style={{
              width: "calc(25vw)",
              borderRadius: 30
            }}
          />
        </Box>

        {/* -------------------note------------------------ */}
   
          <Box
             display={"flex"}
             flexDirection="column"
             alignItems="flex-start"
             sx={{
               borderRadius: 5,
               width: "calc(45vw)",
               height: "calc(13vw)",
               bgcolor: "#E9E9E9",
               position: "relative",
               top: "calc(-65vh)",
               zIndex: "modal"
              }}
          >
            <Typography
              mt={1}
              ml={4}
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="1.4rem"
              color="#818589"
            >
              <NoteAltIcon fontSize="large" /> 나만의 노트 작성
            </Typography>
            <Typography
              mt={4}
              ml={4}
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="1.7rem"
            >
              해결된 에러를 기록하여
              <br />
              나만의 노트 만들기
            </Typography>
          </Box>
          <Box
          sx={{
            position: "relative",
            zIndex: "tooltip",
            top: "calc(-100vh)",
            left: "calc(15vw)",
            boxShadow: 10,
            borderRadius: 5
          }}
           
          >
            <img
              className="note1"
              src={note1}
              alt="note1"
              style={{
                width: "calc(25vw)",
                borderRadius: 30
              }}
            />
        </Box>
      </Box>
    </Container>
  );
}
