import DigitalClock from "./Task/DigitalClock";
import ExpenseTracker from "./Task/ExpenseTracker";
import Navbar from "./Task/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileCard from "./Task/ProfileCard";
import Home from "./Task/Home";
import ProgressBar from "./Task/ProgressBar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/DigitalClock" element={<DigitalClock/>}></Route>
        <Route path="/ExpenseTracker" element={<ExpenseTracker/>}></Route>
        <Route path="/ProgressBar" element={<ProgressBar/>}></Route>
        <Route
             path="/ProfileCard"
             element={
             <ProfileCard
             name="Aditya Yadav"
             role="React Developer"
             city="Azamgarh"
             name1="Aman Yadav"
             role1="java"
             city1="Azamgarh"
              name2="Anurag Yadav"
             role2="java"
             city2="Azamgarh"
             />         
              
  }
  
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
