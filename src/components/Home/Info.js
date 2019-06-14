import React from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
export default function Info({ img2 }) {
  return (
    <section id="about" className="py-5">
      <Title title="About Me" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Img fluid={img2} />
          </div>
          <div className="col-lg-8 textdiv">
            <h6 className="text-center">
              Hi! I am Mannan. My Background is in Chemical Engineering and
              Economics. I am currently based in the DC metro area. My grad
              school research has mostly focused on trade in international
              energy markets especially with respect to how companies and
              coutries flout international rules to circumvent sanctions. I dove
              into Web Development while helping a friend in his work with a
              Non-profit in the Denver area. I have since done free lance work
              for a small business based in Colorado.
            </h6>
            <h6 className="text-center">
              When I am not coding, you can find me walking and exploring the
              history around DC
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}
