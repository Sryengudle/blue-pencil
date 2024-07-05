import React from "react";
import { Link } from "react-router-dom";
import fb from '../../assets/images/fb.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/yt.png'
import instagram from '../../assets/images/Instagram.png'
import Button from "../button";
import './style.css';
import { MENUBAR_ITEMS } from "../../utils/menu-bar";

const IMAGES = [
    {
        icon: fb,
        alt: 'facebook'
    },
    {
        icon: linkedin,
        alt: 'linkedin'
    },
    {
        icon: twitter,
        alt: 'twitter'
    },
    {
        icon: youtube,
        alt: 'youtube'
    },
    {
        icon: instagram,
        alt: 'instagram'
    },
]

function Footer() {
    return (
        <footer id="footer" className="left-right-body-space">
            <div className="about-company-wrap">
                <p className="company-text">©2023 Yourcompany</p>
                <p className="l-text">Landing</p>
                <Button
                    onClick={() => { }}
                    label={'Purchase now'}
                    variant={'primary'}
                    classes={{
                        fontSize: '14px',
                        minWidth: '114px'
                    }}
                />
            </div>

            <div className="footer-nav-link-social-wrapper">
                <div className="footer-nav-link-inner-wrapper">
                    <ul className="navbar-nav">
                        {
                            MENUBAR_ITEMS.map((menu, idx) => (
                                <li className="nav-item" key={idx}>
                                    <Link className="nav-link" to={menu.redirectPath} >{menu.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer-socail-link-wrap">
                    {
                        IMAGES.map((image, idx) => <img key={idx} src={image.icon} alt={image.alt} className="img-fluid" />)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer