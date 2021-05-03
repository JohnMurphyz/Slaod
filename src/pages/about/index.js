import React from "react"
import Layout from "../../components/Layout.js"
import Img from "gatsby-image"

import Anime from "react-anime"

export default function about({ data }) {
  return (
    <Layout breadcrumbs={["about"]}>
      <Anime delay={100} opacity={[0, 1]}>
        <div className="pt-5 container about mt-5">
          <h3 className="mb-5">John</h3>
          <div className="john-photo">
            <Img
              className=""
              fluid={data.file.childImageSharp.fluid}
              alt="John"
            />
          </div>

          <div>
            <p className="textbox">
              John is a Filmmaker and Visual Designer based in Ardmore, West
              Waterford. He is soon to be (he hopes) a graduate of NUI Galway's
              Drama, Theatre and Performance programme. He aspires to look like
              Carl Fredricksen from Up and gets closer by the day.
            </p>
            <p className="textbox">
              His work has focused on Theatre and promotional work. He operates
              remotely as a Freelance Editor and Motion Graphics Designer.
              Locally, he is available for full production.
            </p>
          </div>
        </div>
      </Anime>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "John.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
