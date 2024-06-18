export const UserModel = {
  currentUser: null,
  currentHistory: [],
  selectedHistoryIndex: null,
  currentTextToTranslate: "",
  translatedText: "",
  translateDsc: "en",
  translateSrc: "en",
  currentTranslatePromiseState: {},

  resetSetting() {
    this.currentTextToTranslate = "";
    this.translatedText = "";
    this.translateDsc = "en";
    this.translateSrc = "en";
    this.selectedHistoryIndex = null;
    this.currentTranslatePromiseState = {};

    this.friendList = [];
    this.currentHistory = [];
    this.currentUser = null;
  },

  isLogin() {
    return this.currentUser;
  },

  setCurrentUser(currUser) {
    if (this.currentUser != currUser) {
      this.currentUser = currUser;
    }
  },

  setTranslatedText(text) {
    if (this.currentUser && this.currentTextToTranslate != "") {
      this.translatedText = text;
    }
  },

  setCurrentHistoryIndex(histIdx) {
    if (this.selectedHistoryIndex != histIdx) {
      this.selectedHistoryIndex = histIdx;
    }
  },

  setCurrentHistory(hist) {
    if (this.currentUser) {
      this.currentHistory = hist;
    }
  },

  addToHistory() {
    const tempHist = {
      id: this.currentHistory.length,
      currentTextToTranslate: this.currentTextToTranslate,
      translatedText: this.translatedText,
      translateDsc: this.translateDsc,
      translateSrc: this.translateSrc,
    };
    this.currentHistory = [tempHist, ...this.currentHistory];
  },

  setTextToTranslate(text) {
    if (this.currentTextToTranslate != text) {
      this.currentTextToTranslate = text;
    }
  },

  setTranslateDsc(dsc) {
    if (this.translateDsc != dsc) {
      this.translateDsc = dsc;
    }
  },

  setTranslateSrc(src) {
    if (this.translateSrc != src) {
      this.translateSrc = src;
    }
  },
};
