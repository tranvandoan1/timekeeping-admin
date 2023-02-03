import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./app/views/layout/LayoutAdmin";
import LoginScreen from "./app/views/login/LoginScreen";
import RequestaAndApprove from "./app/views/main/requestAndApprove/RequestaAndApprove";
import ShiftsList from "./app/views/main/timesheets/component/ShiftsList";
import Timesheets from "./app/views/main/timesheets/component/Timesheets";
import TimeSheets from "./app/views/main/timesheets/TimeSheets";
import User from "./app/views/main/User";
import { Provider } from 'react-redux'
import { store } from './app/redux/store';
import './App.css'
import WageHome from "./app/views/main/wage/WageHome";
import WageDetail from './app/views/main/wage/component/WageDetail';
import Wage from "./app/views/main/wage/component/Wage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginScreen />} path="/signin" />
          <Route element={<LoginScreen />} path="" />
          <Route element={<LayoutAdmin />} path="">
            <Route element={<TimeSheets />} path={''}>
              <Route element={<Timesheets />} path={'/timesheets'} />
              <Route element={<ShiftsList />} path={'/shift-list'} />
            </Route>
            <Route element={<User />} path="/user" />
            <Route element={<WageHome />} path={'/wage/'} >
              <Route element={<Wage />} path={'list'} />
              <Route element={<WageDetail />} path={'detail'} />
            </Route>
            <Route element={<RequestaAndApprove />} path="/requesta-and-approve" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
