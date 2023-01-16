import GoogleIcon from '@mui/icons-material/Google';
import GoogleButton from "../components/Login/GoogleButton";
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import {GoogleLogout} from 'react-google-login';
import GoogleBtn from '../components/Login/GoogleBtn_Test';


export default function EgoLogin() {
    return (
        <Box
            border="5px solid #f3f3f3"
            borderRadius={4}
            display="flex"
            flexDirection="column"
            width="calc(25vw)"
            p={3}
            ml={75}
            mt={15}
            alignItems="center"
        >
            <Box mb={1}>
                <GoogleIcon fontSize='large' />
            </Box>
            <Box
                display={"flex"}
                flexDirection="row"
                mb={4}
                style={{ textDecoration: "none", color: "#2E3B55" }}
            >
                <Typography
                    fontWeight={900}>
                    ErrorGOnize&nbsp;
                </Typography>
                with Google
            </Box>
            <Box mb={2}>
                <GoogleButton />
            </Box>
        </Box>
    );
}