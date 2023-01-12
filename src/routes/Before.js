import { Box, Typography } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import CategoryIcon from "@mui/icons-material/Category";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import img from "../images/vision.jpeg";
import dash1 from "../images/dash1.png";
import note1 from "../images/note1.png";
import qna from "../images/qna.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { shadows } from "@mui/system";

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
        class="img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          width: "calc(45vw)",
          height: "calc(25vw)",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "calc(45vw)",
            height: "calc(25vw)",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
        >
          <Typography
            mt={7}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="2rem"
            color="#FFFFFF"
          >
            ErrorGOnize
          </Typography>
          <Typography
            mt={2}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="2.5rem"
            color="yellow"
          >
            Error, 복잡한 검색은 X
          </Typography>
          <Typography
            mt={0.5}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="2.7rem"
            color="#FFFFFF"
          >
            쉽게 찾고 해결하기
            <Box ml={18} mt={3.5}>
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: 50,
                }}
              />
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* ----------------dash---------------------- */}
      <Box display={"flex"} flexDirection="raw" ml={8} mt={6}>
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="flex-start"
          sx={{
            borderRadius: 5,
            width: "calc(45vw)",
            height: "calc(18vw)",
            bgcolor: "#F1F1F1",
          }}
        >
          <Box display="flex" alignItems="center" ml={4} mt={2}>
            <UpdateIcon fontSize="large" style={{ color: "#818589" }} />
            <Typography
              mt={1}
              ml={2}
              fontFamily={"Prosto One"}
              fontWeight={400}
              fontSize="1.3rem"
              color="#818589"
            >
              업데이트되는 새로운 질문
            </Typography>
          </Box>
          <Typography
            mt={4}
            ml={4}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.9rem"
          >
            몰랐던 Error는 확인
            <br />
            내가 아는 Error는 답변
          </Typography>
        </Box>

        <Box
          // border={"5px solid #FF5733"}
          // borderRadius={8}
          ml={-23}
          mt={5}
        >
          <img
            className="dash1"
            src={dash1}
            alt="dash1"
            style={{
              width: 250,
              height: 210,
              borderRadius: 30,
              boxShadow: "10px 5px 5px gray",
            }}
          />
        </Box>
      </Box>

      {/* -------------------QnA--------------------- */}
      <Box display={"flex"} flexDirection="raw" ml={8} mt={6}>
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="flex-start"
          sx={{
            borderRadius: 5,
            width: "calc(45vw)",
            height: "calc(13vw)",
            bgcolor: "#F1F1F1",
          }}
        >
          <Box display="flex" alignItems="center" ml={4} mt={2}>
            <CategoryIcon fontSize="large" style={{ color: "#818589" }} />
            <Typography
              mt={1}
              ml={2}
              fontFamily={"Prosto One"}
              fontWeight={400}
              fontSize="1.3rem"
              color="#818589"
            >
              카테고리로 분류된 에러
            </Typography>
          </Box>
          <Typography
            mt={4}
            ml={4}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.9rem"
          >
            쉽고 빠른 에러 검색
          </Typography>
        </Box>

        <Box
          // border={"5px solid #FF5733"}
          // borderRadius={8}
          ml={-23}
          mt={5}
        >
          <img
            className="qna"
            src={qna}
            alt="qna"
            style={{
              width: 250,
              height: 210,
              borderRadius: 30,
              boxShadow: "10px 5px 5px gray",
            }}
          />
        </Box>
      </Box>

      {/* -------------------note------------------------ */}
      <Box display={"flex"} flexDirection="raw" ml={16} mt={-1}>
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="flex-start"
          sx={{
            borderRadius: 5,
            width: "calc(45vw)",
            height: "calc(18vw)",
            bgcolor: "#F1F1F1",
          }}
        >
          <Box display="flex" alignItems="center" ml={4} mt={2}>
            <NoteAltIcon fontSize="large" style={{ color: "#818589" }} />
            <Typography
              mt={1}
              ml={2}
              fontFamily={"Prosto One"}
              fontWeight={400}
              fontSize="1.3rem"
              color="#818589"
            >
              나만의 노트 작성
            </Typography>
          </Box>
          <Typography
            mt={4}
            ml={4}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.9rem"
          >
            해결된 에러를 기록하여
            <br />
            나만의 노트 만들기
          </Typography>
        </Box>
        <Box
          // border={"5px solid #FF5733"}
          // borderRadius={9}
          ml={-21}
          mt={5}
        >
          <img
            className="note1"
            src={note1}
            alt="note1"
            style={{
              width: 300,
              height: 170,
              borderRadius: 20,
              boxShadow: "10px 5px 5px gray",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
