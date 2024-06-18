import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function HistoryEntry(props) {
  const handleClick = () => {
    props.setEntry(props.entry);
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid",
    borderColor: "divider",
    borderRadius: 10,
    bgcolor: "inherit",
    fontFamily: "Roboto font",
    fontSize: "15px",
  };
  return (
    <button
      onClick={handleClick}
      style={{ fontFamily: "Roboto font", fontSize: "15px" }}
    >
      <Box sx={style}>
        <Box sx={(style, { paddingTop: "10", paddingBottom: "10" })}>
          <Box sx={(style, { display: "flex", paddingBottom: "5" })}>
            {props.translatesrc} to {props.translatedsc}
          </Box>
          Input: {props.input}
        </Box>
      </Box>
    </button>
  );
}
