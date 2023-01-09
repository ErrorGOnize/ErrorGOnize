import * as React from "react";
import Box from "@mui/material/Box";
import OthersPfBtn from "./OthersPfBtn";
import RecentQtnContent from "./RecentQtnContent";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

export default function RecentQtn() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="baseline"
      p={1}
      gap={1}
      sx={{ borderRadius: 5, width: "calc(60vw)" }}
      border={"5px solid #f3f3f3"}
    >
      <OthersPfBtn/>
      <Box p={2}>
      <Link to={"/qna/detailqna"} style={{ textDecoration: "none" }}>
        <RecentQtnContent/>
      </Link>
      </Box>
      
    </Box>
  );
}
