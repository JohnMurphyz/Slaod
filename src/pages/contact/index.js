import React from "react"
import Layout from "../../components/Layout.js"
import Anime from 'react-anime';

export default function contact() {
  return (
  <Layout breadcrumbs={[ "Contact"]}>
    <main className="container-fluid h-100 pt-5 mt-5">
        <div className="h-100 mx-auto">
        <Anime delay={(100)}
               opacity={[0, 1]}>
          <h3 className="mb-5">Contact John</h3>


           <p className="px-5">If you are interested in working with John you can get in touch with him through Email!</p>
           <p>Email: j.murphy87@nuigalway.ie </p>


          </Anime>
       </div>
     </main>
  </Layout>
  );
}
