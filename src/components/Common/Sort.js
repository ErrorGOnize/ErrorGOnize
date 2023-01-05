import { Box, Typography } from "@mui/material";

export default function Sort() {
  return (
    <Box
      display="flex"
      gap={1}
      sx={{
        padding: 1,
        borderRadius: 5,
        backgroundColor: "#f3f3f3",
        width: "calc(10vw)",
      }}
      // sx={{ border: "1px solid #A6A0B5", borderRadius: 5, padding: 1 }}
    >
      <Typography
        fontFamily={"Prosto One"}
        fontWeight={800}
        sx={{ color: "#222", ml: 3 }}
      >
        Sort
      </Typography>
    </Box>
  );
}
