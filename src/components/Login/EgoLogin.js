import GoogleButton from "./GoogleButton";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function EgoLogin() {
    return(
        <Box 
            display="flex"
            flexDirection="column"
            p={5} 
            alignItems="center"
            >
            <Typography
                textDecoration = "none"
                fontSize={45}
                color= "#2E3B55" 
            >
                로그인
            </Typography>
            <GoogleButton sx={{ fontSize: 100, color: "#f3f3f3" }}
            />
        </Box>
    );
}