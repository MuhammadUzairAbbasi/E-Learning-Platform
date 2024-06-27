import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/DashBoard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar'
import Profile from "./pages/Profile/Profile";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Dashboard />
        
      </div>
    </Router>      
    </>
  );
}

export default App;
