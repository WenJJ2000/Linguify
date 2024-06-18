import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function TranslateButton(props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        onClick={props.handleTranslateButton}
        sx={{ borderRadius: "30px", padding: "14px 23px" }}
      >
        Translate!
      </Button>
    </Box>
  );
}
