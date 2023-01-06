import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        p: "0px 4px",
        display: "flex",
        alignItems: "center",
        width: "calc(15vw)",
        border: "1px solid lightgray",
        borderRadius: 6,
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
