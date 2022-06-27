import React from "react";
import './main.css'
import multerlogo from '../../src/assets/multorlogo.svg'
import mid2 from '../../src/assets/mid2.webp'
import feat1 from '../assets/feat1.jpg'
import feat2 from '../assets/feat2.jpg'

import about from '../assets/about.jpg'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import footerlogo from '../assets/multor-logo-footer.svg'

function Main() {
    return (
        <>
            <section id="main">
                <div className="top">
                    <header>
                        <img src={multerlogo} alt="logo" /></header>
                    <div className="top_head">
                        <h1>Describe the value of booking an appointment</h1>
                    </div>
                    <div className="top_p">
                        <p>No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p></div>
                </div>
                <div className="middle">
                    <div className="benefits">
                        <ul>
                            <li>
                                <i><MdOutlineFeaturedPlayList /></i>
                                <span>
                                    <h3>Benefit 1</h3>
                                    <p>Highlight the benefits of signing up for an appointment, online class, or video consultation.</p>
                                </span>
                            </li>
                            <li>
                                <i><MdOutlineFeaturedPlayList /></i>
                                <span>
                                    <h3>Benefit 2</h3>
                                    <p>For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
                                </span>
                            </li>
                            <li>
                                <i><MdOutlineFeaturedPlayList /></i>
                                <span>
                                    <h3>Benefit 3</h3>
                                    <p>Remind visitors how easy it is to claim your offer and start enjoying the benefits.</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="app_form">
                        <div className="topic">
                            <h1>Schedule an Appointment</h1>
                        </div>
                        <div className="subtopic">
                            <p>Here, let visitors know what will happen when they complete your form.</p>
                        </div>
                        <div className="app_details">
                            <form action="">
                                <div className="fields">
                                    <div className="first">
                                        <input type="text" name="fname" id="fname" placeholder="First Name" required />
                                    </div>
                                    <div className="last">
                                        <input type="text" name="lname" id="lname" placeholder="Last Name" required /></div>
                                    <div className="mail">
                                        <input type="email" name="email" id="mailid" placeholder="Email" required /></div>
                                    <div className="number">
                                        <input type="number" name="phoneno" id="phone" placeholder="Phone Number" required /></div>
                                    <div className="appointment">
                                        <select name="type-of_appointment" id="typeofapp">
                                            <option value>Type of Appointment</option>
                                            <option value="Type 1">Type 1</option>
                                            <option value="Type 2">Type 2</option>
                                            <option value="Type 3">Type 3</option>


                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button className="submit_button" type="submit">
                            <span>SCHEDULE NOW</span>
                        </button>
                    </div>
                </div>

                <div className="mid2">
                    <div className="mid2-head">
                        <h2>Show visitors what they're signing up for</h2>
                        <span><p>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).

                        </p>
                        </span>
                    </div>
                    <div className="mid2_img">
                        <img src={mid2} alt="mid2" />
                    </div>
                </div>


                <div className="features">
                    <div className="featurelist">
                        <div className="feat_img">
                            <img src={feat1} alt="" srcset="" />
                        </div>
                        <div className="feat_num">
                            <h3>FEATURE 1</h3>
                        </div>
                        <div className="feat_p">
                            <p>Talk about some of the details of your offer with a focus on the value people get back.</p>
                        </div>
                    </div>
                    <div className="featurelist">
                        <div className="feat_img">
                            <img src={feat2} alt="" srcset="" />
                        </div>
                        <div className="feat_num">
                            <h3>FEATURE 2</h3>
                        </div>
                        <div className="feat_p">
                            <p>Is there a pain point that your service resolves? Tell visitors about it here.</p>
                        </div>
                    </div>
                    <div className="featurelist">
                        <div className="feat_img">
                            <img src={feat2} alt="" srcset="" />
                        </div>
                        <div className="feat_num">
                            <h3>FEATURE 3</h3>
                        </div>
                        <div className="feat_p">
                            <p>Alternatively, you could use this section to address some frequently asked questions.</p>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="about_img">
                        <img src={about} alt="about" /></div>
                    <div className="about_details">
                        <div className="about_about">
                            <h5>ABOUT</h5>
                        </div>
                        <div className="about_head">
                            <h3>Some more information about your business</h3>
                        </div>
                        <div className="about_p">
                            <span><p>Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="foot_img">
                        <img src={footerlogo} alt="logo" />
                    </div>
                    <div className="footer_text">
                        <p>© 2020 Insert Name Here. All rights reserved.</p></div>
                </div>


            </section>
        </>

    )

}

export default Main