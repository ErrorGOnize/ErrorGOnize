import * as React from "react";
import {Typography} from "@mui/material"
import {Box} from "@mui/material";


export default function RecentQtnContent() {
    return(
      <Box 
        display="flex"
        flexDirection="column"
        gap={3}
        alignItems="baseline"
        >
        <Typography fontFamily={"Prosto One"} fontWeight={900}>
            Question Title......................
        </Typography>
        <Typography fontFamily={"Prosto One"} fontWeight={400}>
            Question Content<br/>
            ......................................................................................
            ..........................................................................더보기
        </Typography>
        <Typography fontFamily={"Prosto One"} fontWeight={300} fontSize={13}>
            조회수 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;답변 12
        </Typography>
      </Box>
      
    );
}

