import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="d-flex justify-content-evenly mb-4">
            <Link className="btn btn-success" to="/DigitalClock">DigitalClock</Link>
            <Link className="btn btn-primary" to="/ExpenseTracker">ExpenseTracker</Link>
            <Link className="btn btn-danger" to="/ProfileCard">ProfileCard</Link>
            <Link className="btn btn-warning" to="/ProgressBar">ProgressBar</Link>
        </div>
    )
}

export default Navbar;
