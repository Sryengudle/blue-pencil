import React from 'react';
import sec1 from '../../assets/images/sec1.png'
import { DASHBOARD_JSON } from '../../utils/dashboard-content';
import Button from '../../shared/button';

function Dashboard() {
    return (
        <>
            <section id="hero_section">
                <div className="hero_section_container">
                    <div className="hero_content_wrap">
                        <h1>Introduce Your Product Quickly & Effectively</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                        <p className="hero-sec-para">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                        <div className="hero_btn_wrap">
                            <Button
                                onClick={() => { }}
                                label={'Purchase UI Kit'}
                                variant={'primary'}
                            />
                            <Button
                                onClick={() => { }}
                                label={'Learn More'}
                                variant={'secondary'}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section id="section-2" className="left-right-body-space container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="section-2-content-wrapper">
                            <div className="section-2-content-inner-wrapper">
                                <h1>Light, Fast & Powerful</h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                <p className="sec-2-sec-para">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                <div className="two-icon-content-wrap">
                                    <div className="first-icon-content-wrap">
                                        <h5>Title Goes Here</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                    </div>
                                    <div className="sec-icon-content-wrap">
                                        <h5>Title Goes Here</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src={sec1} alt="sec1" className="img-fluid" />
                    </div>
                </div>
            </section>
            {
                DASHBOARD_JSON.map((item, idx) => {
                    return (
                        <section id="section-2" className="left-right-body-space container-fluid">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <img alt={`image-${idx}`} src={item.icon} className="img-fluid" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="section-2-content-wrapper">
                                        <div className="section-2-content-inner-wrapper w-500">
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                            <p className="sec-2-sec-para">{item.badgeDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
            <section id="section-5" className="mt-200">
                <div className="price-sec-flex">
                    <div className="price-sec-wrapper">
                        <h1 className="price-title">A Price To Suit Everyone</h1>
                        <p className="price-para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                        <div className="price-value-wrap">
                            <h1 className="price-value">$40</h1>
                            <p className="price-value-para">UI Design Kit</p>
                        </div>
                        <div className="price-sample-wrap">
                            <p className="price-sample-para">See, One price. Simple.</p>
                            <div>
                                <Button
                                    onClick={() => { }}
                                    label={'Purchase Now'}
                                    variant={'primary'}
                                    classes={{
                                        height: '34px',
                                        fontSize: '14px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;
