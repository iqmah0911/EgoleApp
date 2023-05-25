import React, { useState } from 'react'
import Logo from "../img/logo.png"
import "bootstrap/dist/css/bootstrap.min.css";
import Be from "../img/be.png"
import dashboard from "../img/space_dashboard.png";
import transactionDetails from "../img/Order.png";
import transactionSummary from "../img/Desk_alt.png";
import walletReport from "../img/Vector 57.png";
import ticketReport from "../img/confirmation_number.png";
import reprint from "../img/Print.png";
import dropdown from "../img/expand_more.png";
import HB from "../img/square.png";



function Nav1() {

    const [navActive, setNavActive] = useState(false)


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

  return (
    <div>
       
        <div className="header">
            <img src={Logo} alt="" className='logo' />
            <div className="hamburger">
                <span className='sp'>Settings</span>
                <img src={Be} alt="" className="hamburgerIcon" />
                <img className='harm' src={HB} alt="menu" />
            </div>
        </div>
        <hr />
        <div className="navBar">
            {navBarItems.map(navBarItem => (
                <div className={`${navBarItem.title === 'Dashboard' ? 'navBarItem' : 'navBarItem2'} navItem`}>
                    <img src={navBarItem.icon} alt="" className="navBarItemImg" />
                    <span className="navBarItemText">
                        {navBarItem.title}
                    </span>
                    {navBarItem.title === "Tickets Report" && (
                        <img src={dropdown}/>
                    )}
                </div>
            ))}
        </div>
        
    </div>
    
  )
}

export default Nav1