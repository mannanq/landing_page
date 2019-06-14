import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Project({ project, fluid }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{project.frontmatter.title}</h6>
          <h6>{project.frontmatter.description}</h6>
        </div>

        <a
          href={project.frontmatter.link}
          className="btn btn-yellow mt-3 text-capitalize"
        >
          See Demo
        </a>
        <a
          href={project.frontmatter.git}
          className=" btn btn-yellow text-capitalize mt-2"
        >
          See on GitHub
        </a>
      </div>
    </div>
  )
}
