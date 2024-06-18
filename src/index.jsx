import { createRoot } from "react-dom/client";
import { ReactRoot } from "./ReactRoot";
import { UserModel } from "/src/UserModel.js";

import { observable, configure, reaction } from "mobx";
configure({ enforceActions: "never" }); // we don't use Mobx actions
const reactiveModel = observable(UserModel);

createRoot(document.getElementById("root")).render(
  <ReactRoot model={reactiveModel} />
);
// createRoot(document.getElementById("root")).render(<ReactRoot />);
