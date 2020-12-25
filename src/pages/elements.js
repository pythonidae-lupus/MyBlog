import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
         
         <p>
         Ideas aren’t always revolutionary. Sometimes, they are simple and relatable. Sometimes, they manifest into their physical forms because they resonate with some people and inspire action. That is what this blog is about. The thoughts I share are simple and hopefully will resonate with the readers to the point that inspires action (or imagination in some cases). 
        </p>        
        <p>
        All of us take in information, process it in our minds and give out a convoluted message which consists of not just the input as it is, but also a hint of our personality and thoughts. This design makes every person unique. Therefore, everyone has something unique to offer to the world. Every person sharing an idea through their own websites, or with the help of any other blogging site, is like candles lighting up worldwide, resulting in some light and warmth for the people around them.
        </p>
        <p>
        My name is Yajur Sood. I have a Bachelor’s of Engineering degree in the field of information technology from the University of Mumbai. I aspire to become a designer in the field of tech itself (web designer, software designer, technological product designer, etc.). My hobbies include drawing, painting, gaming, reading and problem-solving. I love listening to music, trying new technologies, and learning new things. Currently looking for a job in the technological arena itself and also work as a freelance web-developer.
        </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
