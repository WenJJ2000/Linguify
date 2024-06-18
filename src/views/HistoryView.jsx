import React from "react";
import HistoryEntry from "../components/HistoryEntry";
import HistoryBar from "../components/HistoryBar";
import HistoryDisplay from "../components/HistoryDisplay";
import { Box } from "@mui/system";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import ArrowImage from "../images/arrow.png";
import { languages } from "../languageList";

export default function HistoryView(props) {
  const [selectedEntry, setSelectedEntry] = useState(null);

  function findLanguageName(code) {
    const language = languages.find((lang) => lang.code === code);
    return language ? language.name : "";
  }

  function entryArrayACB() {
    const currentHistory = props.getCurrentHistoryACB();
    if (currentHistory) {
      return currentHistory.map((ele) => {
        return (
          <HistoryEntry
            key={ele.id}
            entry={ele}
            setEntry={setSelectedEntry}
            translatedsc={findLanguageName(ele.translateDsc)}
            translatesrc={findLanguageName(ele.translateSrc)}
            input={ele.currentTextToTranslate}
          />
        );
      });
    } else {
      return <div>History is empty!</div>;
    }
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{ flex: "0 0 auto", width: "200px", borderRight: "1px solid #ccc" }}
      >
        <HistoryBar buttons={entryArrayACB()} />
      </Box>
      <Box sx={{ flex: "1", overflowY: "auto" }}>
        {selectedEntry ? (
          <Box sx={{ display: "flex", paddingLeft: 1.1, paddingTop: 1.1 }}>
            <HistoryDisplay
              language={findLanguageName(selectedEntry.translateSrc)}
              text={selectedEntry.currentTextToTranslate}
            />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              width="20px"
            >
              <img
                src={ArrowImage}
                alt="Arrow"
                style={{ height: "2em", margin: "0 0.5em" }}
              />
            </Divider>
            <HistoryDisplay
              language={findLanguageName(selectedEntry.translateDsc)}
              text={selectedEntry.translatedText}
            />
          </Box>
        ) : (
          <Box sx={{ paddingLeft: "20px", paddingTop: "10px" }}>
            <div>Select a history entry to display.</div>
          </Box>
        )}
      </Box>
    </Box>
  );
}
