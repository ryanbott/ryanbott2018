import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


const WorkPage = ({data}) => (
<main>
<div className="">
      <section className="hero" style={{paddingBottom: "2em"}}>
  <div className="row">
    <div className="recipe">
      <div className="recipe_text">
      <div className="recipe_text_title">
        <h1 className="recipe_overflow">Current Work &amp; Portfolio</h1>
      </div>
      <div className="recipe_text_content">
        <hr className="header_line" style={{backgroundColor: "#3f5688"}} />
        <span className="recipe_rating" style={{color: "#3f5688"}}></span>
        <p className="recipe_lead">From Lincoln Logs and Legos to art, music, graphics, code, photography and any other projects I can get my hands on.</p>
      </div>
    </div>
    <div className="recipe_image">
      <Img className="recipe_image--img" sizes={data.workBackground.sizes} alt="Penguins Phone Case Art"/>
    </div>
    </div>
  </div>
</section>

      <section id="half">
  <div className="row half">
    <div className="half_text">
      <h2 className="">Feed the Children</h2>
      <hr className="header_line" style={{backgroundColor: "#c6007e"}} />
      <p>Creating a world where no child goes to bed hungry. Combined big vision ideas at conception along with deep, data-driven design to grow fundraising efforts across all digital
platforms.</p>

      <a href="https://www.behance.net/gallery/65595011/Feed-the-Children" ><button className="half_button" style={{backgroundColor: "#c6007e"}} >View Project</button></a>


    </div>
    <div className="half_image">
      <Img className="half_image" sizes={data.feed.sizes} alt="Feed the Children"/>
    </div>
  </div>
</section>
      <section id="half">
  <div className="row half">
    <div className="half_text" style={{order: "2"}}>
      <h2 className="">Oklahoma City Thunder Statlab</h2>
      <hr className="header_line" style={{backgroundColor: "#1e325f"}} />
      <p>Challenges students with montly projects and activites focused on statistics with real life NBA analytics,</p>
      <a href="https://www.behance.net/gallery/65421157/NBAcom-OKC-Thunder-Statlab" ><button className="half_button" style={{backgroundColor: "#1e325f"}}>View Project</button></a>


    </div>
    <div className="half_image">
      <Img className="half_image" sizes={data.statlab.sizes} alt="NBA Oklahoma City Thunder Statlab"/>
    </div>
  </div>
</section>
      <section id="half">
  <div className="row half">
    <div className="half_text">
      <h2 className="">University of Oklahoma</h2>
      <hr className="header_line" style={{backgroundColor: "#660000"}}/>
      <p>iPhone Developer at OU IT. In charge of updating one of two major OU apps, OU2GO, to blend new standards in mobile web with native iOS code. Prepped the new universal app, OU, that launched in Summer 2013.</p>

      <a href="https://www.behance.net/gallery/65421385/University-of-Oklahoma-Redesign-Concept" ><button className="half_button" style={{backgroundColor: "#660000"}}>View Project</button></a>


    </div>
    <div className="half_image">
      <Img className="half_image" sizes={data.ouHome.sizes} alt="University of Oklahoma homepage redesign"/>
    </div>
  </div>
</section>
<div className="row">
  <div className="gallery">
    <h2 className="gallery--title">Some other projects and cool things I&#039;ve loved working on</h2>

      <Img className="gallery--img" sizes={data.okHomes.sizes} alt="1st Oklahoma Homes redesign"/>
      <Img className="gallery--img" sizes={data.fsSite.sizes} alt="Freestyle Creative homepage redesign"/>
      <Img className="gallery--img" sizes={data.hockey.sizes} alt="Hockey Icons"/>
      <Img className="gallery--img" sizes={data.oksounds.sizes} alt="OK Sounds Oklahoma Music"/>
      <Img className="gallery--img" sizes={data.penguinPhone.sizes} alt="Penguins Phone Case"/>
      <Img className="gallery--img" sizes={data.wm.sizes} alt="Windswept Media homepage redesign"/>
      <Img className="gallery--img" sizes={data.rm.sizes} alt="Raisemore Product Design"/>
      <Img className="gallery--img" sizes={data.dupuis.sizes} alt="Pascal Dupuis PSD Art"/>
  </div>
</div>

        </div>

</main>
)

export default WorkPage

export const query = graphql`
  query WorkSiteMeta {
    workBackground: imageSharp(id: {regex: "/penguins800x600.jpg/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    feed: imageSharp(id: {regex: "/feed-the-children_600.png/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    statlab: imageSharp(id: {regex: "/okc-statlab.png/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    ouHome: imageSharp(id: {regex: "/OU_600.png/"}) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }


    okHomes: imageSharp(id: {regex: "/1okh_600.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    fsSite: imageSharp(id: {regex: "/fs_600.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    hockey: imageSharp(id: {regex: "/hockey-icons.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    oksounds: imageSharp(id: {regex: "/oksounds.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    penguinPhone: imageSharp(id: {regex: "/penguins800x600.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    wm: imageSharp(id: {regex: "/wm_600.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    rm: imageSharp(id: {regex: "/raisemore.png/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    dupuis: imageSharp(id: {regex: "/dupuis_800x600.jpg/"}) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }




  }
`
