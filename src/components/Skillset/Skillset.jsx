import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//style
import style from '../../styles/skillset.module.css'

//icons
import html5 from '../../images/html-5.png'
import css3 from '../../images/css-3.png'
import bootstrap from '../../images/bootstrap.png'
import js from '../../images/js-1.png'
import react from '../../images/react.png'
import php from '../../images/php.png'
import mysql from '../../images/mysql.png'
import wordpress from '../../images/wordpress.png'
import nodejs from '../../images/nodejs.png'
import expressjs from '../../images/express-js.png'
import mongodb from '../../images/mongodb.png'

const Skillset = () => {
    return (
        <section className={style.skillsetSection}>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 className={style.sectionName} data-aos="fade-in">My Current Skillsets</h1>
                            <p style={{color:'#7a7a7a'}} data-aos="fade-in">I am constantly trying to improve. Learning new skills daily and motivating myself to do something more.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={html5} alt="" />
                            {/* <p className={style.iconPara}>95%</p> */}
                        </div>
                       <p className={style.iconName}>HTML5</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={css3} alt="" />
                        </div>
                        <p className={style.iconName}>CSS3</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={bootstrap} alt="" />
                        </div>
                        <p className={style.iconName}>Bootstrap</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={js} alt="" />
                        </div>
                        <p className={style.iconName}>Javascript</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={react} alt="" />
                        </div>
                        <p className={style.iconName}>React</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={nodejs} alt="" />
                        </div>
                        <p className={style.iconName}>NodeJS</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={expressjs} alt="" />
                        </div>
                        <p className={style.iconName}>ExpressJS</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={mongodb} alt="" />
                        </div>
                        <p className={style.iconName}>MongoDB</p>
                    </Col>
                    <Col data-aos="flip-left">
                        <div className={style.cardIcon}>
                            <img src={wordpress} alt="" />
                        </div>
                        <p className={style.iconName}>Wordpress</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skillset