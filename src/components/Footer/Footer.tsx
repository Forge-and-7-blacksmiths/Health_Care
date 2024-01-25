import React from 'react';
import './Footer.scss';
import logoIcon from '../../images/logoIcon.svg';
import logoText from '../../images/logoText.png';
import iconFacebook from '../../images/iconFacebook.svg';
import iconTwitter from '../../images/iconTwitter.svg';
import iconInstagram from '../../images/iconInstagram.svg';
import iconLinkedin from '../../images/iconLinkedin.svg';
import iconYouTube from '../../images/iconYouTube.svg';
import iconMail from '../../images/iconMail.svg';
import iconPhone from '../../images/iconPhone.svg';
import iconLocation from '../../images/iconLocation.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container footerContainer'>
        <div className='footerLeft'>
          <div className='footerLogos'>
            <img
            className={'logoIcon'}
            src={logoIcon}
            alt='logoIcon'
          />
          <img
            className ={'logoText'}
              src={logoText} alt='logoText' />
              <p className=''>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p></div>
                <div className='footerIconsBlock'>
          <ul className='footerIconsList'>
            <li className='footerIconsItem'><a href='index.html' className='footerIconsLink'> <img className='footerIconFacebook' src={iconFacebook} alt='icon' /> </a></li>
            <li className='footerIconsItem'><a href='index.html' className='footerIconsLink'> <img className='footerIconTwitter' src={iconTwitter} alt='icon' /></a></li>
            <li className='footerIconsItem'><a href='index.html' className='footerIconsLink'> <img className='footerIconInstagram' src={iconInstagram} alt='icon' /></a></li>
            <li className='footerIconsItem'><a href='index.html' className='FooterIconsLink'> <img className='footerIconLinkedin' src={iconLinkedin} alt='icon' /> </a></li>
            <li className='footerIconsItem'><a href='index.html' className='FooterIconsLink'> <img className='footerIconYouTube' src={iconYouTube} alt='icon' /> </a></li>
          </ul>
                </div>
        </div>
      <div className='footerProduct'>
        <h1 className='footerSubject'>Products</h1>
          <ul className='footerList'>
            <li className='footerItem'>Features</li>
            <li className='footerItem'>Pricing</li>
            <li className='footerItem'>Case studies</li>
            <li className='footerItem'>Reviews</li>
            <li className='footerItem'>Updates</li>
          </ul>
      </div>
      <div className='footerCompany'>
        <h1 className='footerSubject'>Company</h1>
          <ul className='footerList'>
            <li className='footerItem'>About</li>
            <li className='footerItem'>Contact us</li>
            <li className='footerItem'>Careers</li>
            <li className='footerItem'>Culture</li>
            <li className='footerItem'>Blog</li>
          </ul>
      </div>
      <div className='footerSupport'>
        <h1 className='footerSubject'>Support</h1>
          <ul className='footerList'>
            <li className='footerItem'>Getting started</li>
            <li className='footerItem'>Help center</li>
            <li className='footerItem'>Server status</li>
            <li className='footerItem'>Report a bug</li>
            <li className='footerItem'>Chat support</li>
          </ul>
      </div>
      <div className='footerContact'>
        <h1 className='footerSubject'>Contact us</h1>
          <ul className='footerList'>
            <li className='footerItem'><a href='index.html' className='footerContactLink'><img className='footerIcons' src={iconMail} alt='icon' />contact@company.com</a></li>
            <li className='footerItem'><a href='index.html' className='footerContactLink'><img className='footerIcons' src={iconPhone} alt='icon' />(414) 687 - 5892</a></li>
            <li className='footerItem'><a href='index.html' className='footerContactLink'><img className='footerIcons' src={iconLocation} alt='icon' />794 Mcallister St
San Francisco, 94102</a></li>
          </ul>
      </div>
      </div>
    </footer>
  );
};