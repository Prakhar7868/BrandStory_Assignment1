import React from 'react';
import "./Footer.css";
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>

<div className="footer" id="contact">
			<div className="footer_box">
				<div className="container">
					<div className="row footer-border">
						<div className="col-sm-12 col-lg-4 footer-border1">
							<div className="footer-widget">
								<div className="widget-about">
									<h4 className='heading'>Eea elit quis exriciation culpa</h4>
                                    <br />
                                    <p>Company Provides leaders, Business with actionable credit intelligence on private entilites.</p>
										
									
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-sm-12">
							<div className="footer-widget">
								<div className="footer-menu">
										<ul>
											<li>
											<a href="#">Investor</a>
											</li>
											<li>
											<a href="#">News</a>
											</li>
											<li>
											<a href="#">Blogs</a>
											</li>
											<li>
											<a href="#">Case Study</a>
											</li>
										</ul>
								</div>
                                <h6>Sales & Support</h6>
							</div>
						</div>
						
						<div className="col-lg-2 col-sm-12">
							<div className="footer-widget">
								<div className="footer-menu">
										<ul>
											<li>
											<a href="#">Team </a>
											</li>
											<li>
											<a href="#">Pricing</a>
											</li>
											<li>
											<a href="#">Support</a>
											</li>
											<li>
											<a href="#">Portfolio</a>
											</li>
										</ul>
								</div>
                                <h6>920-566-4751</h6>
							</div>
						</div>





						


							<div className="col-lg-2 col-sm-12">
							<div className="footer-widget">
								<div className="footer-menu footer-padding">
										<ul>
											<li>
											<a href="#">Compilance</a>
											</li>
											<li>
											<a href="#">Security</a>
											</li>
											<li>
											<a href="#">Contact us</a>
											</li>
							
										</ul>
								</div>
                                <h6>Support@creditwatch.in</h6>
                                
							</div>
						</div>



                        <div className="col-lg-2 col-sm-12">
							<div className="footer-widget footer-color">
								
										<ul>
											<li>
											<a href="#">Existing Users</a>
											</li>
											<li>
                                            <button type="button" className="main-btn">
                                             <div className="effect"></div>
                                             <span>LOGIN</span>
                                            </button>
											</li>
											<li>
											<a href="#">Connect with us</a>
											</li>
										</ul>

                                        <ul className="footer-icons">
										<li><a href="#"> <FaFacebook className='icon'/></a></li>
                                        <li><a href="#"><FaTwitter className='icon'/></a></li>
										<li><a href="#"><FaLinkedinIn className='icon' /></a></li>
										
									</ul>
								
                               
							</div>
						</div>
						
					</div>
				</div>
			</div>
        </div>

    </>
  )
}
