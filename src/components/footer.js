import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import FooterLogo from '../img/rb_logo_white.png'

const FooterNav = [
  {
    name: 'Work',
    link: '/work'
  }, {
    name: 'Shop',
    link: 'https://www.teepublic.com/user/ryanbott'
  }, {
    name: 'Contact Me',
    link: '/contact'
  },
]

const SocialLinks = [
  {
    name: 'Instagram',
    link: 'http://instagram.com/ryanbott'
  }, {
    name: 'Dribbble',
    link: 'http://dribbble.com/ryanbott'
  }, {
    name: 'Behance',
    link: 'https://www.behance.net/ryanbott'
  },{
    name: '500px',
    link: 'http://500px.com/ryanbott'
  },
]

const Footer = ({ siteTitle }) => (
  <footer id="footer" className="footer">
  <div className="footer_main">
    <div className="container row">
      <div className="c_3_block">
        <div className="footer_block">
        <div className="footer_logo">
            <a href="/"><img src={FooterLogo} alt="Ryan Bott" /></a>
        </div>
      </div>
      </div>
  <div className="c_6">
    <p>Explore</p>
    <ul>
      {FooterNav.map(link => (
        <li key={link.name}>
          <p><a href={link.link} className={link.name.toLowerCase()}  alt={link.name}>{link.name}</a></p>
        </li>
      ))}
    </ul>
  </div>

  <div className="footer_social">
    <ul>
      {SocialLinks.map(link => (
        <li key={link.name}>
          <a href={link.link} className={link.name.toLowerCase()} target="_blank" alt={link.name}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>

          </div>
  </div>
  <div className="footer_bottom">
    <div className="quotes">
            <p>"The fears are paper tigers. You can do anything you decide to do."</p>
      <span className="author">- Amelia Earhart</span>
    </div>
    <div className="copyright">
      <span>&copy; ryanbott.com</span>
    </div>
  </div>
</footer>
)

export default Footer
