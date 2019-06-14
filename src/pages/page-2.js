import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
// import Title from ""
import Project from "../components/Projects/Project"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="My Projects"
      styleClass="about-background"
    />
    <StaticQuery
      query={query}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <div className="row">
                {data.projects.edges.map(({ node: project }) => {
                  return (
                    <Project
                      key={project.id}
                      project={project}
                      fluid={project.frontmatter.image.childImageSharp.fluid}
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
    img: file(relativePath: { eq: "projects.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            link
            git
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
export default SecondPage
