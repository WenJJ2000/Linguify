import React from "react";
import { observer } from "mobx-react-lite";
import { TranslateView } from "../views/TranslateView";
import { doTranslate } from "../translateSource";
import { saveToFirebase } from "../firebaseModel";
import { useState } from "react";
import loadingGif from "../images/loading.gif";

const Translate = observer(function TranslatePresenter(props) {
  const [transText, setTransText] = useState(props.model.translatedText);
  const [isLoading, setIsLoading] = useState(false);

  function handleTranslateACB() {
    setIsLoading(true);
    const temp = {
      q: props.model.currentTextToTranslate,
      source: props.model.translateSrc,
      target: props.model.translateDsc,
    };

    if (temp.source == temp.target) {
      const translatedDate = temp.q;
      props.model.setTranslatedText(translatedDate);
      setTransText(translatedDate);
      props.model.addToHistory();
      saveToFirebase(props.model);
      setIsLoading(false);
    } else {
      doTranslate(temp)
        .then((res) => {
          const translatedData = res.translations[0].translatedText;
          props.model.setTranslatedText(translatedData);
          setTransText(translatedData);
          props.model.addToHistory();
          saveToFirebase(props.model);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  return (
    <div>
      <TranslateView
        handleTranslate={handleTranslateACB}
        currentTextToTranslate={props.model.currentTextToTranslate}
        outputText={transText}
        translateSrc={props.model.translateSrc}
        translateDsc={props.model.translateDsc}
        setTextToTranslateACB={(e) => {
          props.model.setTextToTranslate(e);
        }}
        setTranslateSrcACB={(e) => {
          props.model.setTranslateSrc(e);
        }}
        setTranslateDscACB={(e) => {
          props.model.setTranslateDsc(e);
        }}
      />
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <img
            src={loadingGif}
            alt="Loading..."
            style={{ width: "80px", height: "60px" }}
          />
        </div>
      )}
    </div>
  );
});

export { Translate };
