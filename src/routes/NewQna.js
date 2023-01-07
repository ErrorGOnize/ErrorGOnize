import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

export default () => {
  return (
    <Container sx={{ pt: 3, mb: 5 }}>
      <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 800,
        },
      }}
      >
        <Paper variant="outlined" square />
          <Typography variant="h6" color="primary" gutterBottom>
            Title
          </Typography>
      </Box>
    </Container>
  );
};