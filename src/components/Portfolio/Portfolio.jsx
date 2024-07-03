import React, { useEffect, useState } from 'react';

import style from '../../styles/portfolio.module.css';

import { galleryData } from '../galleryData';

import { Col, Container, Row } from 'react-bootstrap';

const Portfolio = () => {

    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(galleryData);
        setCollection([... new Set(galleryData.map((item) => item.title))])
    }, []);


    const galleryFilter = (itemData) => {
        const filterData = galleryData.filter((item) => item.title == itemData);
        setData(filterData)
    }

    return (
        <section className={style.portfolioSection} id='portfolio'>
            <Container>
                <Row>
                    <Col>
                        <div className={style.texts}>
                            <h1 className={style.heading} data-aos="fade-in">My Works</h1>
                        </div>
                        <div className="app">
                            <div className="gallerywrapper">
                                <div className={style.filterItem}>
                                    <ul>
                                        <li><button onClick={() => setData(galleryData)} data-aos="fade-down">All</button></li>
                                        {collection.map((item) => <li key={item?.id} data-aos="fade-down"><button onClick={() => { galleryFilter(item) }}>{item}</button></li>)}
                                    </ul>
                                </div>
                                <div className={style.galleryContainer} data-aos="zoom-in">
                                    {data.map((item) => <div key={item.id} className={style.galleryItem} >
                                        <a href={item.visit} rel='noreferrer' target='_blank'>
                                            <img src={item.image} className={style.itemImage} />
                                        </a>
                                        <h5 className={style.itemHeading}>{item.heading}</h5>
                                        <a href={item.visit} target='_blank' rel='noreferrer' className={style.visit}>(Visit Site)</a>
                                        <div style={{ display: "inline", marginLeft: '5px' }}>
                                            {item.client ? <a href={item.client} target='_blank' rel='noreferrer' className={style.visit} style={{ marginRight: '5px', textDecoration: 'underline' }}>client</a> : ""}
                                            {item?.server ? <a href={item.server} target='_blank' rel='noreferrer' className={style.visit} style={{ textDecoration: 'underline' }}>server</a> : ""}
                                        </div>

                                        <p className={style.itemParagraph}>{item.paragraph}</p>
                                        <div className=''>
                                            {
                                                item?.technologies ? <h6>Technologies: {item?.technologies}</h6> : ""
                                            }
                                        </div>
                                        <div> {item?.features ? <h5>Features:</h5> : ""}
                                            {
                                                item?.features ?
                                                    item.features.map((feature, index) => <div key={index}><p style={{ padding: "0px", margin: "0px" }}>{feature}</p></div>)
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio