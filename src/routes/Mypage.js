import { useState, useEffect } from "react";
import { Container, Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "../components/MyPage/TabPanel";
import Profile from "../components/MyPage/Profile";
import axios from "axios";

export default function Mypage() {
  const [tab, setTab] = useState("NOTE");
  const [toLink, setToLink] = useState("/note/newnote");
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const user = await axios.get("http://localhost:8080/user/2");
    console.log(user);
    setUser(user.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const tabChange = (newValue) => {
    setTab(newValue.target.innerText);
    if (newValue.target.innerText == "NOTE") setToLink("/note/newnote");
    if (newValue.target.innerText == "Q & A") setToLink("/qna/newqna");
  };

  var personalInfo = {
    name: "홍길동",
    intro:
      "대구와 경북 동부 10개 시군에 내려졌던 초미세먼지 주의보는 오후 들어 모두 해제됐습니다.주의보는 해제됐지만 내일도 대구의 초미세먼지 농도는 매우 나쁨, 경북은 나쁨에 오후 들어 일시적으로 매우 나쁨 수준이 예상돼, 야외활동 시 주의가 필요합니다.",
    web: "www.handong.edu",
    tagP: ["웹개발자", "바르게살자"],
    tagI: ["Python", "java", "SQL", "C++", "C", "Javascript"],
    img: "src",
  };
  return (
    <Container sx={{ pt: 7, width: "calc(75vw)" }}>
      <Profile personalInfo={personalInfo}></Profile>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tab} onChange={tabChange} centered>
            <Tab label="NOTE" value="NOTE" />
            <Tab label="Q & A" value="Q & A" />
          </Tabs>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{ pt: 3, mb: 3, pl: 10, pr: 10 }}
      >
        <TabPanel mode={tab} toLink={toLink}></TabPanel>
      </Box>
    </Container>
  );
}

/*
<Container sx={{ pt: 7, width: "calc(75vw)" }}>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Profile personalInfo={personalInfo}></Profile>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} alignItems="center">
            <Chips mode="Profile" data={personalInfo.tagP} edit={edit}/>
          </Grid>
          <Grid item xs={6}>
            <Chips mode="Interests" data={personalInfo.tagI} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tab} onChange={tabChange} centered>
            <Tab label="NOTE" value="NOTE" />
            <Tab label="Q & A" value="Q & A" />
          </Tabs>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{ pt: 3, mb: 3, pl: 10, pr: 10 }}
      >
        <TabPanel mode={tab} toLink={toLink}></TabPanel>
      </Box>
    </Container>
 */
