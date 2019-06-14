import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Mannan Qazi"
      subTitle="FullStack Developer"
      styleClass="default-background"
    />
    <Info img2={data.img2.childImageSharp.fluid} />
    <StaticQuery
      query={query}
      render={data => {
        return (
          <section id="contact" className="py-5 contact">
            <div className="container">
              <div className="row">
                {data.contacts.edges.map(({ node: contact }) => {
                  return (
                    <Contact
                      key={contact.id}
                      contact={contact}
                      fixed={contact.frontmatter.image.childImageSharp.fixed}
                    />
                  )
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "bio.JPG" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contacts: allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "contact" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                fixed(height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            details
            def
          }
        }
      }
    }
  }
`

export default IndexPage
