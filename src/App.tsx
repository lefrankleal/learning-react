import "./App.css";
import {
  AboutScreen,
  ContactScreen,
  HomeScreen,
  LoginScreen,
  NotFoundScreen,
} from "./screens";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/not-found" element={<NotFoundScreen />} />
      <Route path="*" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
