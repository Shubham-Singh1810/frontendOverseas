import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import GuestRoutes from "./routes/GuestRoutes";
import {GlobalStateProvider} from './GlobalProvider';
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <GlobalStateProvider><AllRoutes/></GlobalStateProvider>  
  );
}

export default App;
