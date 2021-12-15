import { Route, Switch } from "react-router-dom";
import Login from "../features/authentication/Login";
import HomePage from "../features/home/HomePage";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute";
import Register from "../features/authentication/Register";
import CarListPage from "../features/cars/CarListPage";
import CarList from "../features/cars/CarList";
import CarDetailsPage from "../features/cars/CarDetailsPage";

function App() {
  return (
    <>
        <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
        <Switch>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cars" component={CarList}/>
          <Route path="/cars/:id"><CarDetailsPage /></Route>
        </Switch>
    </>
  );
}

export default App;
