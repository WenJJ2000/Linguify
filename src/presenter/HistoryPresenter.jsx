import { React, useEffect, useState } from "react";
import HistoryView from "../views/HistoryView";
import { observer } from "mobx-react-lite";
import loadingGif from "../images/loading.gif";

const History = observer(function HistoryPresenter(props) {
  const [isLoading, setIsLoading] = useState(false);

  function getCurrentHistory() {
    setIsLoading(true);
    if (props.model && props.model.currentHistory.length > 0) {
      setIsLoading(false);
      return props.model.currentHistory;
    } else {
      setIsLoading(false);
      return null;
    }
  }

  return (
    <div>
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
      {props.model.isLogin() ? (
        <HistoryView getCurrentHistoryACB={getCurrentHistory} />
      ) : (
        <html lang="en">
          <script type="text/javascript">window.location.hash = "#/"</script>
          <title>Login to view</title>

          <a href="#/">
            Please click on this link if not redirected automatically
          </a>
        </html>
      )}
    </div>
  );
});
export { History };
