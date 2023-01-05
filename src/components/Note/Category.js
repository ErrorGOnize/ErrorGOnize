import * as React from "react";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function Category() {
  return (
    <Box
      border={"5px solid #f3f3f3"}
      sx={{
        width: "calc(15vw)",
        maxWidth: "100%",
        borderRadius: 8,
        // backgroundColor: "#f3f3f3",
      }}
    >
      <MenuList>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800 }}># ALL</Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800 }}># JavaScript</Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800 }}># C</Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800 }}># Java</Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800 }}># Java</Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800 }}># Java</Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800 }}># Java</Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
