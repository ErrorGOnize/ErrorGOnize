import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import Search from "../components/Common/Search";
import Popularqna from "../components/Common/Popularqna";
import AddQnaBtn from "../components/Qna/AddQnaBtn";
import QuestionCard from "../components/Qna/QuestionCard";
import Filter from "../components/Qna/Filter";
import Sort from "../components/Common/Sort";

export default function Qna() {
  return (
    <Container maxWidth="lg" sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box display="flex" flexDirection="column" gap={3}>
          <Search />
          <Category />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Box display="flex" flexDirection="row" gap={3}>
            <Sort />
            <Filter />
          </Box>
          <QuestionCard
            question="Q. javascript에서 변수명을 object 키로 사용하는 방법?"
            date="2021-05-21"
            content="제가 원하는 형태는 { math: 50, english: 55 } 이렇게 되면 좋겠습니다. 
          subject1과 subject2를 키로 바로 정의할수는 없나요?"
            tag="#javascript"
            numOfAnswer="1"
          />
          <QuestionCard
            question="Q. javascript에서 왜 더이상 var를 사용하지 않나요?"
            date="2021-05-19"
            content="왜 var 대신 let과 const가 더 좋나요? 
          그럼 var은 더이상 배우지 않아도 문제 없을까요? 선생님께서는 쓸 일이 거의 없을 거라고 하셨는데, 
          개발자 커뮤니티 등등 찾아보면 var에 관련된 내용이 은근 많은 것 같아서요..!"
            tag="#javscript"
            numOfAnswer="2"
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <AddQnaBtn />
          <Popularqna />
        </Box>
      </Box>
    </Container>
  );
}
