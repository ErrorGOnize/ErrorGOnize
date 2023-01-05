import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Container } from "@mui/material";

const pages = ["Q & A", "Note", "My Page"];

function Header() {
  return (
    <Container>
      <AppBar position="static" style={{ background: "#fff" }} elevation={0}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            fontStyle={{ color: "#2E3B55" }}
            sx={{
              flexGrow: 1,
              fontWeight: 900,
              fontFamily: "Prosto One",
            }}
          >
            ErrorGOnize
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mr: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "#A6A0B5",
                  fontFamily: "Prosto One",
                  fontWeight: 600,
                }}
              >
                {page}
              </Button>
            ))}
            <NotificationsIcon sx={{ color: "#A6A0B5", ml: 1, mr: 1 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Header;
