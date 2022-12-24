import UpNavbar from "./components/Navbar/UpNavbar";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer"; 
import './App.css'

function App() {
  return (
    <div className="App" >
      <UpNavbar/>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
