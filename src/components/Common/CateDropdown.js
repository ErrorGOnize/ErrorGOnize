import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function CateDropdown() {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 100 }} size="small">
      <InputLabel sx={{ fontFamily: "Prosto One" }}>카테고리</InputLabel>
      <Select
        value={category}
        label="카테고리"
        onChange={handleChange}
        sx={{
          borderRadius: 5,
          // width: "calc(15vw)",
          fontFamily: "Prosto One",
        }}
      >
        <MenuItem value="" fontFamily="Prosto One">
          <em>카테고리</em>
        </MenuItem>
        <MenuItem value={1}>#java</MenuItem>
        <MenuItem value={2}>#spring</MenuItem>
        <MenuItem value={3}>#flutter</MenuItem>
        <MenuItem value={4}>#python</MenuItem>
        <MenuItem value={5}>#javascript</MenuItem>
        <MenuItem value={6}>#android</MenuItem>
        <MenuItem value={7}>#ios</MenuItem>
        <MenuItem value={8}>#c++</MenuItem>
        <MenuItem value={9}>#linux</MenuItem>
        <MenuItem value={10}>#intellij</MenuItem>
      </Select>
    </FormControl>
  );
}
