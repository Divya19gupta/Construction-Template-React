// import logo from './logo.svg';
import './assets/css/style.css';
import './components/Portfolio/Portfolio';
import Portfolio from './components/Portfolio/Portfolio';
import {Carousel} from 'react-bootstrap';

function App() { 

  return (
    <div className="App">
      <div id="page-top">
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
            {/* <div className="container"> */}
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
                    Menu
                    <i className="fa fa-bars lg"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li> */}
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>

        {/* <!-- Services--> */}
        <header className="pg-section" id="services">
          

            <Carousel className="carousel">
                <Carousel.Item className="item">
                    <img
                    src="https://b-scpa.com/wp-content/uploads/2015/10/ThinkstockPhotos-476152048.jpg"
                    alt="First slide"
                    height="50%"
                    width="90%"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                    src="https://b-scpa.com/wp-content/uploads/2015/10/ThinkstockPhotos-476152048.jpg"
                    alt="Third slide"
                    height="50%"
                    width="90%"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                    src="https://b-scpa.com/wp-content/uploads/2015/10/ThinkstockPhotos-476152048.jpg"
                    alt="Third slide"
                    height="50%"
                    width="90%"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </header>
        <Portfolio/>
        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
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
        {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://source.unsplash.com/user/erondu/1600x900" alt="" />
                            <h4>Kay Garland</h4>
                            <p className="text-muted">Designation</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://source.unsplash.com/user/erondu/1600x900" alt="" />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Designation</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://source.unsplash.com/user/erondu/1600x900" alt="" />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Designation</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        {/* <!-- Clients--> */}
        <div className="py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
            <div className="container">
                <br/><br/>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" >Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" noValidate="noValidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-md text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer py-4" style={{"backgroundColor":"#ffcc29"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!" style={{"color":"black"}}>Privacy Policy</a>
                        <a href="#!" style={{"color":"black"}}>Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </div>
  );
}

export default App;
