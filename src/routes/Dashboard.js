import { Box, Container } from "@mui/material";
import Popularqna from "../components/Common/Popularqna";
import RecentQtn from "../components/Dashboard/RecentQtn";
import QrCode from "../components/Dashboard/QrCode";
import QuestionBar from "../components/Dashboard/QuestionBar";

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
          <QrCode />
        </Box>
      </Box>
    </Container>
  );
}
