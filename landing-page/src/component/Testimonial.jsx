import React from 'react'
import testimonialImage1 from './../assets/img/testimonials-1.jpg'
import testimonialImage2 from './../assets/img/testimonials-2.jpg'
import testimonialImage3 from './../assets/img/testimonials-3.jpg'

function Testimonial() {
  return <>
  <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonialImage1} alt="testimonials" />
                            <h5>Margaret E.</h5>
                            <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonialImage2} alt="testimonials2" />
                            <h5>Fred S.</h5>
                            <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonialImage3} alt="testimonial3" />
                            <h5>Sarah W.</h5>
                            <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}

export default Testimonial
