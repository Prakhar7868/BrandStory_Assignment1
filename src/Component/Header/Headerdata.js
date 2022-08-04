import React from 'react'
import Headerimage from './images/Headerimage.jpeg';
import "./Headerdata.css";

export default function Headerdata() {
  return (
    <>
        <div className='Header_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1 className='hfont1'>Quis Ipsum Cea Lorem Ipsum</h1>
                        <br />
                        <h5  className='pfont1'>Company Provides leaders, Business with actionable credit intelligence on private entilites
                             they need to improve trust and increase their lending and trending activity.</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={Headerimage} alt='Headerimage' className='headimage'/>
                        </div>
                    </div>
                </div> 
                </div> 
                  
        
    </>
  )
}
