import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { Box, Typography } from "@mui/material";

export default function QrCode() {
    return (
      <Box
        display="flex"
        flexDirection="raw"
        sx={{ borderRadius: 5, width: "calc(26vw)", height: "calc(11vw)" }}
        border={"5px solid #f3f3f3"}
        p={3}
        gap={3}
        alignItems="center"
      >
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.2rem"
            color="black"
           
           
          >
            앱으로 편리하게 이용하세요. 
          </Typography>
        <QrCode2RoundedIcon 
          // color= "primary" 
          sx={{ fontSize: 100, color: "#999" }}/>
      </Box>
    );
  }
  