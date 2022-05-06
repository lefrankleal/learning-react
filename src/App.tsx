import "./App.css";
import {
  AboutScreen,
  ContactScreen,
  HomeScreen,
  NotFoundScreen,
} from "./screens";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const test = true;

  return (
    <Routes>
      {test ? (
        <Fragment>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Fragment>
      ) : (
        <Route path="*" element={<NotFoundScreen />} />
      )}
    </Routes>
  );
}

export default App;
