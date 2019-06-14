import React from "react"
import Img from "gatsby-image"

export default function Contact({ contact, fixed }) {
  return (
    <div className="col-sm-12 col-lg-4 my-3">
      <div className="card text-center">
        <Img fixed={fixed} className="icon" />
        <div className="container  align-items-center justify-content-center">
          <h4 className="py-5">
            <b>{contact.frontmatter.def}</b>
          </h4>
          <p>{contact.frontmatter.details}</p>
        </div>
      </div>
    </div>
  )
}
