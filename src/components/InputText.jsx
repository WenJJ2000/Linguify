import * as React from "react";
import TextField from "@mui/material/TextField";

const InputText = ({ inputValue, handleInputChange }) => {
  return (
    <TextField
      sx={{ width: '300px' }}
      defaultValue={inputValue}
      onChange={handleInputChange}
      id="input"
      label="Input Text Here!"
      variant="outlined"
      multiline
      rows={5}
    />
  );
};

export default InputText;
