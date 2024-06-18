import { React, useState } from "react";
import { Box, Fab, Stack } from "@mui/material";
import { History, Groups, Forum } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";

export default function HomeView(props) {
  const [isAlert, setIsAlert] = useState(false);

  const iconSize = 200;
  const outlineSize = 250;
  const myStyle = {
    maxHeight: outlineSize,
    minHeight: outlineSize,
    minWidth: outlineSize,
    maxWidth: outlineSize,
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setIsAlert(false);

      return;
    }

    setIsAlert(false);
  };

  const handleClick = (loc) => {
    if (loc != "#Translate" && !props.hasUserACB()) {
      setIsAlert(true);
    } else {
      window.location.hash = loc;
    }
  };

  return (
    <div>
      <Stack>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Snackbar
            open={isAlert}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Please Login to view"
          />
          <Fab
            style={myStyle}
            aria-label="History"
            size="large"
            sx={{ margin: 3 }}
            onClick={() => handleClick("#History")}
          >
            <History sx={{ color: pink[500], fontSize: iconSize }} />
          </Fab>
          <Fab
            style={myStyle}
            aria-label="Translate"
            sx={{ margin: 3 }}
            onClick={() => handleClick("#Translate")}
          >
            <Forum color="primary" sx={{ fontSize: iconSize }} />
          </Fab>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Fab
            style={{
              maxHeight: 100,
              minHeight: 100,
              minWidth: 200,
              maxWidth: 200,
            }}
            variant="extended"
            color="primary"
            onClick={props.handleLoginACB}
          >
            Login
          </Fab>
        </Box>
      </Stack>
    </div>
  );
}
