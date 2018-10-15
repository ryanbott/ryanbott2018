import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


import HomeHero from '../components/homeHero'
import ContentArea from '../components/contentArea'
import HalfBlock from '../components/halfBlock'

import ClientSpotlight from '../components/clientSpotlight'
import CodeTools from '../components/codeTools'
import TheProcess from '../components/theProcess'
import ContactForm from '../components/contactForm'



const IndexPage = ({siteTitle, data}) => (
  <main>
  <HomeHero />

  <ContentArea />



  <ClientSpotlight/>
  <CodeTools/>
  <TheProcess/>

<section id="featuredBlog">
  <div className="featuredBlog">
    <div className="featuredBlog_image">
      <Img sizes={data.aboutRyan.sizes} alt="About Ryan" />
      <div className="row">
        <div className="featuredBlog_title">
          <h3><a href="/contact">About Ryan</a></h3>
          <hr className="header_line" style={{backgroundColor: "#D8DDDD"}} />
        </div>
      </div>
    </div>

    <div className="featuredBlog_text">
      <div className="featuredBlog_gallery">
        <Img sizes={data.ryanUganda.sizes} alt="Ryan in Uganda" />
        <Img sizes={data.messOfTime.sizes} alt="A Mess of Time" />
        <Img sizes={data.pit.sizes} alt="Pittsburgh" />
        <Img sizes={data.cabin.sizes} alt="Breckenridge, Colorado" />
      </div>
      <div className="featuredBlog_summary">
        <p>When getting away from pixels and code, I love to cook, visit coffee shops, read, explore new cities and play board games with friends from my ever-growing collection. If you want to know anything else, get in touch.</p>
      </div>
      <div className="featuredBlog_button">
        <a href="/contact"><button className="contactButton" style={{border: "1px solid #D8DDDD"}}>Contact Me</button></a>
      </div>
    </div>
  </div>
</section>

<section id="half">
  <div className="row half">
    <div className="half_text">
      <h2 className="">Prints and Shirts</h2>
      <hr className="header_line" style={{backgroundColor: "#242A46"}} />
      <p>I'm in the process of turning many of my favorite art pieces and graphics into shirts, prints, phone cases and more.</p>

      <a href="https://www.teepublic.com/user/ryanbott" ><button className="half_button" style={{backgroundColor: "#242A46"}}>Shop Merch</button></a>
    </div>
    <div className="half_image">
      <Img sizes={data.artOnTable.sizes} alt="Art On Desk Web" />
    </div>
  </div>
</section>

<ContactForm/>


</main>
)

export default IndexPage


export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/Foggy-Night-Print_web.jpg/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    staplegun: imageSharp(id: {regex: "/staplegun-20.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    otherProjects: imageSharp(id: {regex: "/home-Office.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }


    nba: imageSharp(id: {regex: "/nba.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    okcThunder: imageSharp(id: {regex: "/okc-thunder.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    oucop: imageSharp(id: {regex: "/ou-pharmacy.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    chk: imageSharp(id: {regex: "/chesapeake.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    ftc: imageSharp(id: {regex: "/feed-the-children.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    cap: imageSharp(id: {regex: "/cap-tulsa.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    fs: imageSharp(id: {regex: "/freestyle.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    rm: imageSharp(id: {regex: "/raisemore.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }

    aboutRyan: imageSharp(id: {regex: "/ryanbott-bonaparte.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    ryanUganda: imageSharp(id: {regex: "/ryan-uganda.jpg/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    messOfTime: imageSharp(id: {regex: "/WEB_a-mess-of-time_800x600.jpg/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    pit: imageSharp(id: {regex: "/pit-small.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    cabin: imageSharp(id: {regex: "/cabin-small.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    artOnTable: imageSharp(id: {regex: "/art-on-desk-web.jpg/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }


  }
`
