import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import Img from 'gatsby-image'


const HalfBlock = ({ siteTitle, data }) => (

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

)
export default HalfBlock
