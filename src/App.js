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
function App() {
  
  return (
    <GlobalStateProvider><AllRoutes/></GlobalStateProvider>
    
  );
}

export default App;
