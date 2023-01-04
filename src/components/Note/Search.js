import { Box, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Paper
      sx={{
        width: "calc(25vw)",
        maxWidth: "100%",
        borderRadius: 5,
        backgroundColor: "#f3f3f3",
      }}
    >
      <Box
        display="flex"
        gap={1}
        sx={{ padding: 1 }}
        // sx={{ border: "1px solid #A6A0B5", borderRadius: 5, padding: 1 }}
      >
        <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)", mr: 1 }} />
        <Typography sx={{ color: "#222" }}>Search</Typography>
      </Box>
    </Paper>
  );
}
