import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function HistoryBar({ buttons }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {buttons.length > 0 ? (
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          fullWidth
        >
          {buttons}
        </ButtonGroup>
      ) : (
        <div style={{ textAlign: "center", padding: "10px" }}>
          History is empty.
        </div>
      )}
    </Box>
  );
}
