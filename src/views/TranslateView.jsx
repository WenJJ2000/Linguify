import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputText from "../components/InputText";
import OutputText from "../components/OutputText";
import TranslateButton from "../components/TranslateButton";
import SelectLanguage from "../components/SelectLanguage";
import { Divider } from "@mui/material";
import ArrowImage from "../images/arrow.png";

export function TranslateView(props) {
  function handleTranslateACB() {
    props.handleTranslate();
  }

  const handleInputChange = (event) => {
    props.setTextToTranslateACB(event.target.value);
  };

  const inputLanguageSelect = (event) => {
    props.setTranslateSrcACB(event.target.value);
  };

  const outputLanguageSelect = (event) => {
    props.setTranslateDscACB(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "20",
        }}
      >
        <InputText
          inputValue={props.currentTextToTranslate}
          handleInputChange={handleInputChange}
        />
        <Divider orientation="vertical" variant="middle" flexItem width="10px">
          <img
            src={ArrowImage}
            alt="Arrow"
            style={{ height: "2em", margin: "0 0.5em" }}
          />
        </Divider>
        <OutputText outputValue={props.outputText} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: "10",
          paddingBottom: "20",
        }}
      >
        <SelectLanguage
          label="From"
          value={props.translateSrc}
          onChange={inputLanguageSelect}
        />
        <SelectLanguage
          label="To"
          value={props.translateDsc}
          onChange={outputLanguageSelect}
        />
      </Box>
      <TranslateButton handleTranslateButton={handleTranslateACB} />
    </div>
  );
}
