import React from "react"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function Info({ img2 }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="About Me" />
        <div className="grid-flex">
          <div className="col col-image">
            <Img fluid={img2} />
          </div>
          <div className="col col-text">
            <div className="Aligner-item">
              <p>
                Hi! I am Mannan. My Background is in Chemical Engineering and
                Economics. I am currently based in the DC metro area. I dove
                into Web Development while helping a friend in his work with a
                Non-profit based in Denver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
