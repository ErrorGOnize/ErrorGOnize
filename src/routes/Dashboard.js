import { Box, Container } from "@mui/material";
import Popularqna from "../components/Common/Popularqna";
import RecentQtn from "../components/Dashboard/RecentQtn";
import DashboardWrite from "../components/Dashboard/DashboardWrite";
import QuestionBar from "../components/Dashboard/QuestionBar";
import GoogleBtn from "../components/Login/GoogleBtn_Test";


export default function Dashboard() {
  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box display="flex" flexDirection="column" gap={3}>
          <QuestionBar />
          <RecentQtn />
          <RecentQtn />
          <RecentQtn />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Popularqna />
          <DashboardWrite />
        </Box>
      </Box>
    </Container>
  );
}
