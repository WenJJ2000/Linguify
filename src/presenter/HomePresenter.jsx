import HomeView from "../views/HomeView";
import { observer } from "mobx-react-lite";
import { doLogin, doLogout } from "../firebaseModel";

const Home = observer(function Home(props) {
  const handleLogin = () => {
    if (!props.model.currentUser) {
      doLogin(props.model);
    } else {
      doLogout(props.model);
    }
  };
  const checkUser = () => {
    return props.model.isLogin();
  };
  return (
    <div>
      <HomeView hasUserACB={checkUser} handleLoginACB={handleLogin} />
    </div>
  );
});
export { Home };
