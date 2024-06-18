import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { languages } from "../languageList";

export default function SelectLanguage({ label, value, onChange }) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-language">{label}</InputLabel>
      <Select labelId="select-language" value={value} onChange={onChange}>
        {languages &&
          languages.map((lang) => {
            return (
              <MenuItem key={label + lang.key} value={lang.code}>
                {lang.name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}
