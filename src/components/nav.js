import React from "react";
import {Link} from "react-router-dom";
import Logo from "../img/logo.png"
import BE from "../img/be.png"
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import dashboard from "../img/space_dashboard.png";
import transactionDetails from "../img/Order.png";
import transactionSummary from "../img/Desk_alt.png";
import walletReport from "../img/Vector 57.png";
import ticketReport from "../img/confirmation_number.png";
import reprint from "../img/Print.png";
import dropdown from "../img/expand_more.png";





const Nav = () => {

  const navBarItems = [
    {
      title: "Dashboard",
      icon: dashboard
    },
    {
      title: "Transaction Details",
      icon: transactionDetails
    },
    {
      title: "Transaction Summary",
      icon: transactionSummary
    },
    {
      title: "Wallet Report",
      icon: walletReport
    },
    {
      title: "Tickets Report",
      icon: ticketReport
    },
    {
      title: "Reprint",
      icon: reprint
    },
  ]

    return(
       <div id='mainheader'>
 
        {/* <ul>
            <li> <img src={Logo}></img></li>
            <li> <hr/></li>
            <li>Settings</li>
            <li> <img src={BE}></img> </li>
        </ul> */}
       <nav className="navbar navbar-expand-lg" style={{borderBottom:'1px solid #cccccc'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{marginLeft:'75px'}}><img src={Logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent:'flex-end'}}>
      <div className="navbar-nav">
        <a className="nav-link active fw-bold" aria-current="page" href="#">Settings</a>
        <a className="nav-link active" aria-current="page" href="#" style={{marginRight:'80px'}}><img src={BE}></img></a>
        <hr/>
      </div>
    </div>
  </div>

</nav>


{/* <nav className="navbar" style={{marginLeft: '75px'}}>
  <form className="container-fluid justify-content-start">
   <a href="">
   <button className="btn btn-outline-success me-2" type="button">
   <img src={dashboard}></img>
    Dashboard
    </button>
   </a>
   <a href="">
   <button className="btn btn-outline-success me-2" type="button">
   <img src={dashboard}></img>
  Transaction Details
    </button>
   </a>
   <a href="">
   <button className="btn btn-outline-success me-2" type="button">
   <img src={dashboard}></img>
  Transaction Summary
    </button>
   </a>
   <a href="">
   <button className="btn btn-outline-success me-2" type="button">
   <img src={dashboard}></img>
 Wallet Report
    </button>
   </a>
   <a href="">
   <button className="btn btn-outline-success me-2" type="button">
   <img src={dashboard}></img>
 Ticket Report
    </button>
   </a>
   <a href="">
   <button className="btn btn-outline-success me-2" type="button">
   <img src={dashboard}></img>
  Reprint
    </button>
   </a>
  </form>
</nav> */}


<aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
              <div className="container-xxl d-flex h-100">
                <ul className="menu-inner">
                <li class="menu-item" style={{background:'linear-gradient(106.88deg, #FF9900 5.27%, #FFD584 90.66%)'}}>
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                     <div data-i18n="Dashboards" >
                      <img src={dashboard} style={{background:'#fff', display: 'inline-block'}}></img>
                        Dashboards
                      </div>
                    </a>
                    </li>

                    <li class="menu-item" style={{background:'linear-gradient(106.88deg, #FF9900 5.27%, #FFD584 90.66%)'}}>
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                     <div data-i18n="Dashboards" >
                      <img src={dashboard} style={{background:'#fff', display: 'inline-block'}}></img>
                        Dashboards
                      </div>
                    </a>
                    </li>

                    <li class="menu-item" style={{background:'linear-gradient(106.88deg, #FF9900 5.27%, #FFD584 90.66%)'}}>
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                     <div data-i18n="Dashboards" >
                      <img src={dashboard} style={{background:'#fff', display: 'inline-block'}}></img>
                        Dashboards
                      </div>
                    </a>
                    </li>

                    <li class="menu-item" style={{background:'linear-gradient(106.88deg, #FF9900 5.27%, #FFD584 90.66%)'}}>
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                     <div data-i18n="Dashboards" >
                      <img src={dashboard} style={{background:'#fff', display: 'inline-block'}}></img>
                        Dashboards
                      </div>
                    </a>
                    </li>

                    <li class="menu-item" style={{background:'linear-gradient(106.88deg, #FF9900 5.27%, #FFD584 90.66%)'}}>
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                     <div data-i18n="Dashboards" >
                      <img src={dashboard} style={{background:'#fff', display: 'inline-block'}}></img>
                        Dashboards
                      </div>
                    </a>
                    </li>

                    <li class="menu-item" style={{background:'linear-gradient(106.88deg, #FF9900 5.27%, #FFD584 90.66%)'}}>
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                     <div data-i18n="Dashboards" >
                      <img src={dashboard} style={{background:'#fff', display: 'inline-block'}}></img>
                        Dashboards
                      </div>
                    </a>
                    </li>
                </ul>
                </div>
</aside>
</div>



    );
}

export default Nav;