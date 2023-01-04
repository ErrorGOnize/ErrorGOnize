import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function Category() {
  return (
    <Paper
      sx={{
        width: "calc(25vw)",
        maxWidth: "100%",
        borderRadius: 8,
        backgroundColor: "#f3f3f3",
      }}
    >
      <MenuList>
        <MenuItem sx={{ m: 1 }}>
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
    </Paper>
  );
}
