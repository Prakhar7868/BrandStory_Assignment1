import React from 'react';
import "./SectionArea.css";
import Sectionimage from './images/Sectionimage.jpg'

export default function SectionArea() {
  return (
    <>
    <div className='Section_Main'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                 <div className='Section1'>
                    <div className="Section_part1">
                            <a href="#" className='active'> icon</a>
			                <a href="#"> CEea elit quis</a>
			                <a href="#"> Eea elit quis</a>
			                <a href="#"> ea elit quis</a>
			                
			                    
			                    <div className="animation title"></div>
			        </div>
                 </div>
             </div>
         </div>
        
        <div className='section_data'>
         <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className='Section_part-1'>
                        <h1 className='hfont2'>Tagline Content Line Goes Here</h1>
                        <br />
                        <h5  className='pfont2'>Company Provides leaders, Business with actionable credit intelligence on private entilites
                             they need to improve trust and increase their lending and trending activity.</h5>
                             <button type="button" className="main-btn">
                                    <div className="effect"></div>
                                    <span>VIEW SOLUTIONS</span>
                                    </button>
                        </div>
                        
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={Sectionimage} className='Sectionimage1'/>
                        </div>
                       
          </div>
          </div>


          
    
    </div>
      

    <div className="section-Area section-box-main">
        <div className="container-fluid">
            <div className="row ">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="sectionbox">
                        <div className="sectionbox-content">
                        
                            <h3>Eea elit quis exriciation elit quis exicitation culpaea elit quis exriciation culpa</h3>
                            <br/><br/><br/><p><a href="#"> Read More</a></p> 
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="sectionbox sectionbox2">
                        <div className="sectionbox-content">
                        
                            <h3>Eea elit quis exriciation elit quis exicitation culpaea elit quis exriciation culpa</h3>
                            <br/><br/><br/><p><a href="#"> Read More</a></p> 
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="sectionbox  sectionbox3">
                        <div className="sectionbox-content">
                        
                            <h3>Eea elit quis exriciation elit quis exicitation culpaea elit quis exriciation culpa</h3>
                            <br/><br/><br/><p><a href="#"> Read More</a></p> 
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="sectionbox sectionbox4">
                        <div className="sectionbox-content">
                        
                            <h3>Eea elit quis exriciation elit quis exicitation culpaea elit quis exriciation culpa</h3>
                            <br/><br/><br/><p><a href="#"> Read More</a></p> 
                            </div>
                        </div>
                    </div>



               </div>
           </div>
        </div>
    



    </div>
    </>
  )
}
