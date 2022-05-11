import "./App.css";
import {
  AboutScreen,
  ContactScreen,
  HomeScreen,
  LoginScreen,
  NotFoundScreen,
} from "./screens";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const auth = false;

  return (
    <Routes>
      {auth ? (
        <Fragment>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Fragment>
      )}
    </Routes>
  );
}

export default App;
