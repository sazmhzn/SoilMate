import { Link } from "react-router-dom";
import "./Header.css";
import call from "../img/call.png"

function Header(props) {

  return (

      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div className="container" style={{padding: "10px", margin: "10px auto"}}>
          <button
            className="navbar-toggler ps-0"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
              <i className="fas fa-bars" />
            </span>
          </button>
          <a href="" className="navbar-brand">
            Soil<span>Mate</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#news">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#pets">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#adoptions">
                  Crops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#foundation">
                  Fertilzers
                </a>
              </li>

              <li className="nav-item d-flex align-items-center pr-4" style={{paddingInline:"20px"}}>
                <a className="nav-link" aria-current="page" href="#contact">
                  Contact
                </a>
                <img src={call} alt="" style={{width:"32px", height:"32px"}}/>
              </li>
              <li>
               
              </li>
            </ul>
            <button className="btn btn-primary ml-4">
                  <Link to="/login">{props.value}</Link>
                </button>
          </div>
        </div>
      </nav>
  
  );
}

export default Header;
