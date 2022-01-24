import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import image1 from '../img/Reklama-1.png'
import image2 from '../img/Reklama-2.jpg'
import image3 from '../img/Reklama-3.jpg'
import Shirt from '../component/Shirt/Shirt'
import Category from '../component/Category/Category';

class BootstrapCarousel extends React.Component {
    render() {
        return (
           <MDBRow className="slide">
            <MDBCol sm='3'>
              <MDBCard className="bor">
                <MDBCardBody>
                  <MDBCardText>
                    <Category />
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='9' className="dow">
              <MDBCard className="bor">
                <MDBCardBody>
                  <MDBCardText>
                      <div className='container-fluid'>
                          <div className="row"  className="foto">
                              <div className="col-sm-12">
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-12">
                                  <Carousel >
                                      <Carousel.Item >
                                          <img
                                              className="d-block w-100"
                                              src={image1}
                                              alt="First slide"
                                          />
                                          <Carousel.Caption>
                                              <h2>Лучшие бренды мужской одежды</h2>
                                          </Carousel.Caption>
                                      </Carousel.Item>
      
                                      <Carousel.Item>
                                          <img
                                              className="d-block w-100"
                                              src={image2}
                                              alt="Second slide"
                                          />
      
                                          <Carousel.Caption>
                                          <h2 style={{color:"black"}}><b>Лучшие бренды женской одежды</b></h2>
                                          </Carousel.Caption>
                                      </Carousel.Item>
      
                                      <Carousel.Item>
                                          <img
                                              className="d-block w-100"
                                              src={image3}
                                              alt="Third slide"
                                          />
                                          <Carousel.Caption>
                                              <h2 style={{color:"#faf5f5"}}><b>Лучшие бренды детской одежды</b></h2>
                                          </Carousel.Caption>
                                      </Carousel.Item>
                                  </Carousel>
                              </div>
                          </div>
                      </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        )
    };
}
export default BootstrapCarousel;