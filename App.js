import './assets/css/style.css';
import React, {useEffect, useState} from 'react';
import './components/Portfolio/Portfolio';
import Portfolio from './components/Portfolio/Portfolio';
import {Modal, Button} from 'react-bootstrap';
import logo from './assets/img/logo.png';
import stair from './assets/img/stair.png';
import ParticlesBg from 'particles-bg';
import p1 from './assets/img/1.png';
import p2 from './assets/img/2.png';
import p3 from './assets/img/3.png';
import person1 from './assets/img/person1.jpg';
import person2 from './assets/img/person2.png';
import person3 from './assets/img/person3.png';

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton style={{
        backgroundColor:"#f9813a",
        color:"black",
        
        
        }}>
        <Modal.Title className="w-100 text-center" style={{fontSize:"20px"}} >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login Here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <form className="container">
          
        <div class="form-group">
                <input type="text" class="form-control" required placeholder="Enter Username"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" required placeholder="Enter Password"/>
            </div>
          
            <center><Button onClick={props.onHide} style={{backgroundColor:"#f9813a",color:"black"}}>SUBMIT</Button></center> 

        </form>
      </Modal.Body>
      {/* <Modal.Footer>
      <img className="logo" src="https://github.com/Divya19gupta/Construction-Template-React/blob/main/assets/img/contruction-logo-removebg-preview.png?raw=true" height="60px" width="90px"/>
        
      </Modal.Footer> */}
    </Modal>
  );
}
function SignModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style=
        {{
          backgroundColor:"#f9813a"
          ,color:"black"
        }}
      >
        <Modal.Title className="w-100 text-center" style={{fontSize:"20px"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register Here
        </Modal.Title> 
      </Modal.Header>
      <Modal.Body className="show-grid">
        <form className="container">
          
        <div class="form-group">
                <input type="text" class="form-control" required placeholder="Enter Username"/>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" required placeholder="Enter Email"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" required placeholder="Enter Password"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" required placeholder="Re-Enter Password"/>
            </div>
          
           <center> <Button onClick={props.onHide} style={{backgroundColor:"#f9813a",color:"black"}}>SUBMIT</Button></center>

        </form>
      </Modal.Body>
    </Modal>
  );
}

function App() { 
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [signModalShow, setSignModalShow] = React.useState(false);
  return (
      
    <div className="App">
        
        <div id="page-top">
        <ParticlesBg color="brown" num={200} type="lines" bg={true} />

<div className="topheader">
  <div className="container t">
    <span style={{color:"#f9813a"}}>.</span>
  <button className="btn btn-sm login" onClick={() => setLoginModalShow(true)}><i className="fa fa-user"  aria-hidden="true"></i>&nbsp;Login</button>
  <button className="btn btn-sm signup" onClick={() => setSignModalShow(true)}><i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Sign Up</button>
  <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
  <SignModal
        show={signModalShow}
        onHide={() => setSignModalShow(false)}
      />
  </div>
</div>

    {/* Top Header */}

<div className="header">
  <div className="navbar" style={{backgroundColor:"white"}}>
  
  <div className="container">
    <a href="#page-top"><img src={logo}style={{marginLeft:"40px"}} height="60px" width="90px"/></a>
      <ul className="list-inline">
        <li className="list-inline-item i1">
        <i className="ico fa fa-map-marker fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;
        <span className="loc">LOCATION<br/><span className="sub">210 N, NY</span></span>
        </li>
        <li className="list-inline-item i2">
        <i className="ico fa fa-phone fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;
        <span className="loc">CONTACT US<br/><span className="sub">0172-XXXXXX</span></span>
        </li>
        <li className="list-inline-item">
        <i className="ico fa fa-phone fa-2x" aria-hidden="true" style={{color:"white"}}></i>&nbsp;&nbsp;
        <button className="b btn btn-sm">REQUEST A QUOTE</button>
        </li>
      </ul>
  </div>
</div>

</div>


  {/* <!-- Navigation --> */}
  <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav" style={{backgroundColor:"black"}}>
  
    <div className="container connav">
      <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#"></a>
      <button style={{backgroundColor:'#f9813a'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{color:"white"}}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item active px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="#page-top">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="#portfolio">Gallery</a>
          </li>
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="#about">About</a>
          </li>
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="#team">Team</a>
          </li>
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="#contact">Contact Us</a>
          </li>
          <li>
          <div className="content">
  <div className="search">
    <input type="text" className="search__input" aria-label="search"/>
    <button className="search__submit" aria-label="submit search"><i style={{color:"white",fontSize:"18px",marginBottom:"14px"}}className="fa fa-search"></i></button>
  </div>
</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section className="page-section clearfix">
    <div className="container">
      <div className="intro">
        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={stair} alt=""/>
        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper"style={{fontSize:"23px"}}>Start your</span>&nbsp;
            <span className="section-heading-lower"style={{fontSize:"23px"}}>Journey with us!</span>
          </h2>
          <p className="inside-text mb-3"style={{fontSize:"13px"}}>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer
          </p>
          <div className="intro-button mx-auto">
            <button className="btn btn-md">Visit Us Today!</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Portfolio/>
        {/* <!-- About--> */}
        
        <section className="page-section" id="about" style={{backgroundColor:"white"}}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.
                    <center><hr width="40%"/></center>
                    </h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid img-circle" src={p1} alt=""/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={p2} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={p3} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                   
                    <li className="timeline-inverted">
                        <div className="timeline-image" style={{backgroundColor:'#f9813a'}}>
                            <h4 >
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    {/* parallax */}

        <div className="jumbotron parallax">
            <div className="container box">
            <center><h3>WHAT OUR CLIENT SAYS</h3></center>
            <p className="l">
            <i className="fa fa-quote-left fa-2x" aria-hidden="true"></i>&nbsp;
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.
                &nbsp;<i className="fa fa-quote-right fa-2x" aria-hidden="true"></i>
            </p>
            </div>
        </div>
        
        {/* <!-- Team--> */}

        <div className="page-section bg-light" id="team">
            <br/><br/>
        <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.
                        <center><hr width="30%"/></center>
                        </h3>
                </div>  
                <center>
                <div className="container row">
                    <div className="col-md-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={person1} alt="" />
                            <h4>Kay Garland</h4>
                            <p className="text-muted">Designation</p>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={person2} alt="" />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Designation</p>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={person3} alt="" />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Designation</p>
                            </div>
                    </div>
                </div>
                </center>
        </div>
        
        {/* <!-- Contact--> */}

          <section className="page-section" id="contact">
            <div className="container">
                    <div className="row pt-5 pl-3">
                        
                        <div className="col-md-4 topic">
                            <p className="upper">Ready to get started?</p>
                            <h2>Let Us Help</h2>
                            <p className="lower"> Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy </p>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                            <label>First Name *</label>
                            <input type="text"name=""className="form-control"/>
                            </div>

                            <div className="form-group">
                            <label>Last Name *</label>
                            <input type="text"name=""className="form-control"/>
                            </div>
                            
                            <div className="form-group">
                            <label>Job Title *</label>
                            <input type="text"name=""className="form-control"/>
                            </div>
                            <br/>
                        </div>
  
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Email *</label>
                            <input type="text"name=""className="form-control"/>
                            </div>

                            <div className="form-group">
                            <label>Company Name *</label>
                            <input type="text"name=""className="form-control"/>
                            </div>

                            <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text"name=""className="form-control"/>
                            </div>

                        </div>
                        
                        </div>  
                        <div className="row">
                          <div className="col-sm-4"></div>
                          
                        <div className="col-sm-4 form-group text-center">
                            <button className="btn btnD2">Request Your Demo Now</button>
                        </div>
                        <div className="col-sm-4"></div>

                        </div> 
                        </div>    
        </section>
        
        {/* <!-- Footer--> //f4f4f2 */}
        <div style={{backgroundColor:"#f58634"}}>
        <footer className="site-footer">
            
        {/* <!-- Site footer --> */}
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <h5 style={{color:"white"}}>ABOUT</h5><br/>
            <img src={logo} height="90px" width="130px"/>
            <p><br/>
            Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5 style={{color:"white"}}>RECENT POST</h5>
            <br/>
            <ul className="recent-post">
            <li>
              <span className="row p-3">
                <span className="col-xs-6 cal">
                    <span className="date">20</span>
                    <br/>
                    <span className="month">MAR</span>
                </span>
                <span className="col-xs-6 title">
                  Blog title first<br/>
                  <span className="subtitle">
                  <i class="fa fa-user" aria-hidden="true"></i>  By Admin / <i class="fa fa-comments" aria-hidden="true"></i> 29
                  </span>
                </span>
              </span>
            </li>
            <li>
              <span className="row p-3">
                <span className="col-xs-6 cal">
                    <span className="date">20</span>
                    <br/>
                    <span className="month">FEB</span>
                </span>
                <span className="col-xs-6 title">
                  Blog title first<br/>
                  <span className="subtitle">
                  <i class="fa fa-user" aria-hidden="true"></i>  By Admin / <i class="fa fa-comments" aria-hidden="true"></i> 30
                  </span>
                </span>
              </span>
            </li>
            <li>
              <span className="row p-3">
                <span className="col-xs-6 cal">
                    <span className="date">20</span>
                    <br/>
                    <span className="month">JULY</span>
                </span>
                <span className="col-xs-6 title">
                  Blog title first<br/>
                  <span className="subtitle">
                  <i class="fa fa-user" aria-hidden="true"></i>  By Admin / <i class="fa fa-comments" aria-hidden="true"></i> 28
                  </span>
                </span>
              </span>
            </li>
            </ul>
            </div>

            <div className="col-xs-6 col-md-3">
            <h5 style={{color:"white"}}>QUICK LINKS</h5><br/>
            <ul className="footer-links">
              <li><a href="#"> >>&nbsp;&nbsp; About Us</a></li> <span  className="line">---------------------------------------------------- </span><br/>
              <li><a href="#"> >>&nbsp;&nbsp; Contact Us</a></li> <span className="line">---------------------------------------------------- </span><br/>
              <li><a href="#"> >>&nbsp;&nbsp; Contribute</a></li> <span className="line">---------------------------------------------------- </span><br/>
              <li><a href="#"> >>&nbsp;&nbsp; Privacy Policy</a></li> <span className="line">---------------------------------------------------- </span><br/>
              <li><a href="#"> >>&nbsp;&nbsp; Sitemap</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5 style={{color:"white"}}>SOCIAL LINKS</h5>
            <br/>
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
          <br/>
        
          </div>
        <div className="container-fluid row">

          <div className="col-sm-2 borbox">
          <span className="row p-3">
            
                <span className="col-xs-6 ic">
                  <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                </span>

                <span className="col-xs-6 topic">
                  Address<br/>
                  <span className="subtopic">
                  No.123<br/>Gates, NY
                  
                  </span>
                </span>
            </span>
          </div>

          <div className="col-sm-2 borbox">
          <span className="row p-2">
            
            <span className="col-xs-6 ic">
            <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
            </span>

            <span className="col-xs-6 topic">
              Number<br/>
              <span className="subtopic">
              0172-XXX<br/>
              98XXXXXX09
              </span>
            </span>
        </span>
          </div>

          <div className="col-sm-2 borbox">
          <span className="row p-2">
            
            <span className="col-xs-6 ic">
            <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
            </span>

            <span className="col-xs-6 topic">
              E-mail<br/>
              <span className="subtopic">
              demo@1.com<br/>
              demo@2.com
              </span>
            </span>
        </span>
          </div>

          <div className="col-sm-2 borbox">
          <span className="row p-2">
            
            <span className="col-xs-6 ic">
            <i class="fa fa-fax fa-3x" aria-hidden="true"></i>
            </span>

            <span className="col-xs-6 topic">
              Fax<br/>
              <span className="subtopic">
              (123)123-4567<br/>
              (123)123-4567
              </span>
            </span>
        </span>
          </div>

      </div>
      
      </footer>

      <hr style={{backgroundColor:"#f58634", width:"100%", height:"0.1px"}}/>
      <footer className="foot">
      
        <div className="row">
          <div className="col text-center">
            <p className="copyright-text">&copy; 2020 Your Company. All Rights Reserved.
    
         <p className="footer-links">
         <a href="#">Terms & Condition</a> / <a href="#">Privacy Policy</a> / <a href="#">Contact Us</a> 
         </p>   
            </p>
          </div>
        </div>
      </footer>
    </div>
       
    </div>
    </div>
  );
}

export default App;
