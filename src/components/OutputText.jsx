import React from "react";
import TextField from "@mui/material/TextField";

const OutputText = ({ outputValue }) => {
  return (
    <TextField
      sx={{ width: '300px' }}
      id="output"
      label="Translated Text here!"
      multiline
      rows={5}
      value={outputValue}
      disabled
    />
  );
};

export default OutputText;
