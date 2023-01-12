import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import AnswerBox from "../components/Qna/AnswerBox";
import Answer from "../components/Qna/Answer";
import QuestionDetail from "../components/Qna/QuestionDetail";
import Popularqna from "../components/Common/Popularqna";
import QnaWrite from "../components/Qna/QnaWrite";

export default function Qna() {
  return (
    <Container
      sx={{ pt: 3, mb: 3, display: "flex", gap: 6 }}
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        maxWidth="calc(20vw)"
        width="calc(15vw)"
        minWidth="calc(15vw)"
      >
        <Category />
      </Box>

      <Box display="flex" flexDirection="column" gap={3} maxWidth="calc(45vw)">
        <QuestionDetail
          question="Q. javascript에서 변수명을 object 키로 사용하는 방법?"
          date="2021-05-21"
          content="const subject1 = 'math';
          const subject2= 'english';
          const info = { subject1: 50, subject2: 55 } 
          
          위의 코드를 보면 subject1, subject2를 정의하고 나서 info를 정의했는데 결과는  아래와 같이 나옵니다.
          console.log(info) // { subject1: 50, subject2: 55 } 
          
          제가 원하는 형태는 { math: 50, english: 55 } 이렇게 되면 좋겠습니다. subject1과 subject2를 키로 바로 정의할수는 없나요?"
          tag="#javascript"
        />
        <AnswerBox/>
        <Answer
          date = "2021-05-18"
          name = "홍길동"
          content = "변수명을 object의 키로 사용하기 위한 방법으로 두 가지 방법이 생각납니다. 1. 객체안의 키를 변수로 사용하려면 대괄호[] 안에 사용하셔야합니다. 2. 각각의 키와 값을 추가해주는 것입니다."
          rec = "4"
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        minWidth="calc(18vw)"
        width="calc(40vw)"
      >
        <Popularqna />
        <QnaWrite />
      </Box>
    </Container>
  );
}