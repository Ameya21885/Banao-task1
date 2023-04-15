import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Dropdown = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 200 }}
        style={{}}
        renderInput={(params) => <TextField {...params} label="Filter" />}
      />
    </div>
  );
};

export default Dropdown;

const top100Films = [{ label: "Write a Post" }, { label: "The Godfather" }];
