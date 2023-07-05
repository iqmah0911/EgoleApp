import React from "react";
import Nav1 from "../components/nav1";
import Footer from '../components/footer';
import Logo from '../img/logo.png';
import UseAirtime from "../components/useAirtime";
import "bootstrap/dist/css/bootstrap.min.css";
import Bank from "../img/Vector (9).png";
import Rect from "../img/Rectangle 43.png"
import Wallet from "../img/Vector 57 (1).png";
import Bag from "../img/Bag.png";
import Arhives from "../img/Arhives_alt.png";
import Money from "../img/Money.png";
import Mark from "../img/Shape.png";
import { Button } from 'react-bootstrap';

import Data from "../img/phonelink_ring.png";
import Cable from "../img/tv (1).png"
import Elect from "../img/bolt.png";
import RT from "../img/directions_car.png";
import Edu from "../img/school.png";
import IN from "../img/verified_user.png";
import Tickets from "../img/confirmation_number (1).png";
import TB from "../img/Vector (10).png";
import TW from "../img/Vector (11).png"
import HB from "../img/square.png";
import Airtime from "../img/phone_android.png"
import Fund from "../components/fund";
import MyModal from '../components/modal';

const Home = () => {
  
        
    return (
        <div style={{overflow: 'hidden'}}>
            <div id='mainheader'>
                <Nav1 />
              
            </div>

            <div className="content-wrapper">
           
                <div className="row">
                    <div className="col-xl-4 mt-4 col-lg-6 col-12 
            ">
                        <div className="card egp">
                            <div className="d-flex align-item-end row">
                                <div className="col-7">

                                    <div className="card-body text-nowrap">
                                        <div className="div">
                                            <h5>Hello First Name</h5>
                                        </div>

                                        <div className="cif">
                                            <p className="mb-2 text-light"> Egole MFB</p>
                                            <p className="mb-2 ban">Bank</p>
                                            <p className="mb-2 text-light"> 1234567890</p>
                                            <p className="mb-2 ban">Account Number</p>



                                        </div>




                                    </div>


                                </div>

                                <div className="col-5 text-center text-sm-left">
                                    <div className="card-body">
                                        <h5>
                                            Agent
                                            <img src={Mark} alt="" />
                                        </h5>

                                        <img className="bnk" src={Bank} alt="" />

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-xl-8 mt-4 col-lg-6 col-12 scd">
                        <div className="card h-100">
                            <div className="card-header">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="card-title mb-0 mt-2"> Transactions</h5>
                                    {/* <img src={Rect} alt="" /> */}
                                    <div className="col-lg-4 col-md-6">
                                    <MyModal/>

                                    {/* <button type="button" class="btn" style={{marginLeft: "170px"}}>Fund Wallet</button> */}
                      
                    </div>
                                    
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row gy-3">
                                    <div className="col-md-3 col-6">
                                        <div className="align-items-center">
                                            <div className="img">
                                                <img src={Wallet} alt="" />

                                            </div>
                                            <div className="card-info">
                                                <h5 className="mt-2 imp">&#8358;122,345,6789</h5>
                                                <small>Wallet Balance</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-6">
                                        <div className="align-items-center">
                                            <div className="img">
                                                <img src={Bag} alt="" />

                                            </div>
                                            <div className="card-info">
                                                <h5 className="mb-0 imp">  &#8358;122,345,6789</h5>
                                                <small>Deposits</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="align-items-center">
                                            <div className="img">
                                                <img src={Arhives} alt="" />

                                            </div>
                                            <div className="card-info">
                                                <h5 className="mb-0 imp">122,666</h5>
                                                <small>Transaction Count</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="align-items-center">
                                            <div className="img">
                                                <img src={Money} alt="" />

                                            </div>
                                            <div className="card-info">
                                                <h5 className="mb-0 imp">  &#8358;122,345,6789</h5>
                                                <small>Transaction Value</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-xl-9 mt-4 col-lg-6 col-12">
                        <div className="card h-60 egp1">
                            <div className="card-header ch">
                                <div className="d-flex justify-content-betwen mb-3">
                                    <h5 className="card-title mb-0 mt-2"> Quick Actions</h5>


                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row gy-3">
                                    <div className="col-md-3 QA">
                                    <div className="d-flex align-items-center">
                                            <img className="imgci" src={Airtime} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Airtime</h5>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 QA">
                                        <div className="d-flex align-items-center">
                                            <img className="imgci" src={Data} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Data</h5>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 QA">
                                        <div className="d-flex align-items-center">
                                            <img className="imgci" src={Cable} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Cable TV</h5>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 QA">
                                        <div className="d-flex align-items-center">
                                            <img className="imgci" src={Elect} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Electricity</h5>
                                              
                                            </div>
                                        </div>
                                    </div>
  </div>
                                    <div className="row">
                                    <div className="col-md-3 col-6 QA">
                                        <div className="d-flex align-items-center">
                                            <img  className="imgci" src={RT} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Road Taxes</h5>
                                                {/* <small>Sales</small> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 QA">
                                        <div className="d-flex align-items-center">
                                            <img className="imgci" src={Edu} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Education</h5>
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 QA">
                                        <div className="d-flex align-items-center">
                                            <img className="imgci" src={IN} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci">Insurance</h5>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  QA">
                                        <div className="d-flex align-items-center">
                                            <img className="imgci" src={Tickets} alt="" />
                                            <div className="card-info">
                                                <h5 className="mb-0 ci"> Tickets</h5>
                                               </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                              



                            </div>
                        </div>


                    </div>
                    <div className="col-xl-3 mt-4 col-lg-6 col-12 scd-1   ">
                        <div className="card" style={{height:'275px'}}>
                            <div className="d-flex align-item-end row">
                                <div className="col-6">

                                    <div className="card-body text-nowrap">
                                      
                                        <div className="card-header">
                                            <h5 className=" card-title mb-0 mt-2 ">Transfers</h5>
                                        </div>
                                        <div className="tb">
                                        <div className="card-body text-nowrap">
                                  
                                      

                                        <div className="cif">
                                           <img src={TB} alt="" />
                                           <p className="mb-2 text-center ban">To Bank</p>
                                           

                                        </div>




                                    </div>

                                        </div>
                                       
                                        


                                    </div>


                                </div>
                                <div className="col-6">

                                    <div className="card-body text-nowrap">
                                      
                                        <div className="card-header">
                                            <h5 className="card-title mb-0 mt-2"> --- </h5>
                                        </div>
                                        <div className="tb">
                                        <div className="card-body text-nowrap">
                                  
                                      

                                        <div className="cif">
                                           <img src={TW} alt="" />
                                           <p className="mb-2 text-center ban">To Wallet</p>
                                           

                                        </div>




                                    </div>

                                        </div>
                                       
                                        


                                    </div>


                                </div>
                                

{/*                                
                                <div className="col-6 text-center">
                                    <div className="card-body tw" style={{marginTop: '60px'}}>
                                        <div className="div">
                                        <img src={TW} alt="" />
                                        </div>

                                        <div className="div">
                                      
                                        <h5>
                                            Agent
                                           
                                            
                                        </h5>
                                        </div>
                                       

                                       

                                    </div>

                                </div> */}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
            

<div className="col-lg-6 col-md-6 col-sm-12 tb-1">
    <table className="table ">
        
        <thead>
        <tr>
            <th className="th">Quick Reports</th>
        </tr>
            <tr className="roww">
                <th>S/N</th>
                <th>PRODUCT</th>
                <th>TXN AMOUNT</th>
                <th>REFERENCE NO.</th>
                <th>CURRENT BALANCE</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>
        </thead>
    </table>
</div>
<div className="col-lg-6 col-md-6 col-sm-12 tb-1">
<table className="table ">
        
        <thead>
        <tr>
            <th className="th">Quick Reports</th>
        </tr>
            <tr className="roww">
                <th>S/N</th>
                <th>PRODUCT</th>
                <th>TXN AMOUNT</th>
                <th>REFERENCE NO.</th>
                <th>CURRENT BALANCE</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Airtime</td>
                <td>&#8358;5,000</td>
                <td>987654321</td>
                <td>&#8358;89,000</td>
            </tr>
        </thead>
    </table>
</div>
</div>

            </div>

        </div>
    );
}
export default Home;