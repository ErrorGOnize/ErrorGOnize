import { useState, useEffect } from "react";
import { Container, Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Avatar from "@mui/material/Avatar";
import Chips from "../components/MyPage/Chips";
import TabPanel from "../components/MyPage/TabPanel";

export default function Mypage() {
  const [ tab, setTab ] = useState("NOTE");

  const tabChange = (newValue) => {
    setTab(newValue.target.innerText);
    console.log(newValue.target.innerText);
  };

  //       <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>

  return (
    <Container sx={{ pt: 7, width: "calc(75vw)" }}>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} alignItems="center">
            <Avatar
              alt="name"
              sx={{
                bgcolor: "dodgerblue",
                width: "50%",
                pt: "25%",
                pb: "25%",
              }}
            ></Avatar>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={9}><h3>홍길동</h3></Grid>
              <Grid item xs={3}>
                <Stack direction="row" alignItems="right" spacing={0.5}>
                  <Button variant="outlined" size="small">공유</Button>
                  <Button variant="outlined" size="small">편집</Button>
                </Stack>
              </Grid>
              <p>
              대구와 경북 동부 10개 시군에 내려졌던 초미세먼지 주의보는 오후 들어 모두 해제됐습니다.주의보는 해제됐지만 내일도 대구의 초미세먼지 농도는 매우 나쁨, 경북은 나쁨에 오후 들어 일시적으로 매우 나쁨 수준이 예상돼, 야외활동 시 주의가 필요합니다.
              </p>
              <p>🌐 website: www.hisnet.handong.edu</p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} alignItems="center">
            <Chips mode="Profile" />
          </Grid>
          <Grid item xs={6}>
            <Chips mode="Interests" />
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
        <TabPanel mode={tab}></TabPanel>
      </Box>
    </Container>
  );
}


/*
<Container sx={{ pt: 7, width: "calc(75vw)" }}>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} alignItems="center">
            <Avatar
              alt="name"
              sx={{
                bgcolor: "dodgerblue",
                width: "50%",
                pt: "25%",
                pb: "25%",
              }}
            ></Avatar>
          </Grid>
          <Grid item xs={8}>
            <h3>홍길동</h3>
            <p>
              대구와 경북 동부 10개 시군에 내려졌던 초미세먼지 주의보는 오후
              들어 모두 해제됐습니다.주의보는 해제됐지만 내일도 대구의
              초미세먼지 농도는 매우 나쁨, 경북은 나쁨에 오후 들어 일시적으로
              매우 나쁨 수준이 예상돼, 야외활동 시 주의가 필요합니다.
            </p>
            <p>website: 😛😝😜</p>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} alignItems="center">
            <Chips mode="Profile" />
          </Grid>
          <Grid item xs={6}>
            <Chips mode="Interests" />
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
        <TabPanel mode={tab}></TabPanel>
      </Box>
    </Container>
*/