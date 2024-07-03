import React from 'react';

import Lottie from "lottie-react";
import animationData from '../../assets/about-me-animation.json'

//style
import style from '../../styles/aboutme.module.css'
import { Col, Container, Row } from 'react-bootstrap'

import { FaDownload } from "react-icons/fa6";



const AboutMe = () => {
  return (
    <section className={style.aboutSection} id='about'>
      <Container>
        <Row>
          <Col md={6}>
            <div className={style.image} data-aos="fade-right">
              <Lottie animationData={animationData} className={style.imageWidth} />
            </div>
          </Col>
          <Col md={6} className={style.middle}>
            <div className={style.texts}>
              <h1 className={style.aboutMe} data-aos="fade-in">About Me</h1>
              <p className={style.para} data-aos="fade-down">Hello, I'm Mashrafi Bin Nur, a passionate web developer dedicated to crafting immersive digital experiences. I have 2 years experience on this field. I can build fully responsive functional websites for you. I believe in the beauty of simplicity and the impact of functionality, ensuring that every project I undertake is not just visually striking but also highly functional and user-friendly. The dynamic nature of technology inspires me to constantly expand my skill set.</p>
              <a className='btn btn-danger' href="https://drive.google.com/file/d/1Ct3I1JIkWmEph231J-UlJS212lIDuzDH/view?usp=sharing" target='_blank' rel='noreferrer' download>Resume <FaDownload /></a>
            </div>
          </Col>

        </Row>

        <Row>
          <div className='mt-5'>
            <h1 className={style.aboutMe} data-aos="fade-in">Education</h1>
            <div>
              <div style={{marginBottom:'10px'}}>
                <h5 style={{ display: "inline" }} data-aos="fade-in">University Degree:</h5> <p style={{ display: "inline" }} className={style.para} data-aos="fade-down">Currently Studying</p>
              </div>
              <div style={{marginBottom:'10px'}}>
                <h5 style={{ display: "inline" }} data-aos="fade-in">College Degree:</h5> <p style={{ display: "inline" }} className={style.para} data-aos="fade-down">Mirpur Cantt Public (2022-2023)</p>
              </div>
              <div className=''>
                <h5 style={{ display: "inline" }} data-aos="fade-in">High School Degree:</h5> <p style={{ display: "inline" }} className={style.para} data-aos="fade-down">Monipur High School (2011-2021)</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe