import IRoute from "../types/router.type";
import LoginScreen from "../views/login/LoginScreen";


const RouterConfig:IRoute[] = [
  {
    key:1,
    path:"/signin",
    component: <LoginScreen />
  }
];
export default RouterConfig;
