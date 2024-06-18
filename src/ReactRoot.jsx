import { Navbar } from "./components/Navbar";
import { Home } from "./presenter/HomePresenter";
import { Translate } from "./presenter/TranslatePresenter";
import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { History } from "./presenter/HistoryPresenter";

export function makeRouter(reactiveModel) {
  return createHashRouter([
    {
      path: "/",
      element: <Home model={reactiveModel} />,
    },
    {
      path: "/Translate",
      element: <Translate model={reactiveModel} />,
    },
    {
      path: "/History",
      element: <History model={reactiveModel} />,
    },
  ]);
}

const ReactRoot = observer(function ReactRoot(props) {
  props.model.ready = true;
  return (
    <div>
      {props.model.ready ? (
        <div className="flexParent">
          <div className="sidebar">
            <Navbar model={props.model} />
          </div>
          <div>{<RouterProvider router={makeRouter(props.model)} />}</div>
        </div>
      ) : (
        <img src="https://brfenergi.se/iprog/loading.gif" alt="loading img" />
      )}
    </div>
  );
});

export { ReactRoot };
