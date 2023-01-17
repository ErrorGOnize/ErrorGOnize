import { Box, Container } from "@mui/material";
import Popularqna from "../components/Common/Popularqna";
import RecentQtn from "../components/Dashboard/RecentQtn";
import DashboardWrite from "../components/Dashboard/DashboardWrite";
import QuestionBar from "../components/Dashboard/QuestionBar";

export default function Dashboard() {
  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box display="flex" flexDirection="column" gap={3} width="calc(60vw)">
          <QuestionBar />
          <RecentQtn />
          <RecentQtn />
          <RecentQtn />
        </Box>
        <Box display="flex" flexDirection="column" gap={3} width="calc(20vw)">
          <Popularqna />
          <DashboardWrite />
        </Box>
      </Box>
    </Container>
  );
}
