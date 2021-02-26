import React from "react";
import Layout from "../../components/Layout.js";
import Img from "gatsby-image";

import Anime from 'react-anime';


export default function about({ data }) {
  return (
<Layout breadcrumbs={[ "about"]}>
<main className="h-200 pt-5 mt-5">
  <div className="mx-auto text-center">
  <Anime delay={(100)}
         opacity={[0, 1]}>
    <h3 className="mb-5">About John</h3>
    <div style={{display: 'inline'}}>
    <Img className="john-photo" fluid=
    {data.file.childImageSharp.fluid}
    alt="John"
    />
    <p className="pt-5 pr-5">John is a Filmmaker and Visual Designer based in West Waterford. He's working on building website's and is unsure about his life.</p>
    </div>
 </Anime>
 </div>
 </main>


</Layout>
)

}


export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "John.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 400){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
