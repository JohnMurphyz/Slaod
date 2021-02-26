import React from "react"
import Layout from "../../components/Layout.js"
import Anime from 'react-anime';

export default function contact() {
  return (
  <Layout breadcrumbs={[ "Contact"]}>
    <main className="contact pt-5 mt-5">
        <div className="mx-auto">
        <Anime delay={(100)}
               opacity={[0, 1]}>
          <h3 className="mb-5">Contact John</h3>

          <div className="container">
           <p>If you are interested in working with John you can get in touch with him through Email!</p>
           <p>Email: j.murphy87@nuigalway.ie </p>
          </div>
          <div style={{visibility: "hidden"}} className="px-5 mx-5">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at turpis tempus, dictum est nec, varius lacus. Aenean a lectus finibus, facilisis augue vel, efficitur mauris. Morbi lobortis nulla at quam viverra mollis. Donec non lacus tortor. Phasellus eget nibh tempor, facilisis quam a, congue urna. Nulla eleifend quam eu nisi semper semper. Maecenas ac fringilla metus. Maecenas luctus orci eu tortor consectetur, vel bibendum orci dictum. Proin molestie ligula nisi, a facilisis nunc pulvinar eu. Duis tempor dapibus pharetra. Duis in libero ultricies, gravida ante quis, hendrerit quam. Proin ornare sed risus ut ornare. Vestibulum sit amet urna nunc.

Morbi venenatis orci ex, sed tincidunt nulla fringilla nec. Nulla bibendum vehicula dapibus. Suspendisse sodales ultricies tellus, eget rhoncus dui egestas quis. Sed ac dignissim felis, eget congue quam. Sed gravida commodo lacus, ultricies varius felis condimentum nec. Maecenas ac rhoncus turpis. In in ante ac lectus cursus porttitor sed ac nibh.

Aliquam fermentum fringilla nunc, sit amet laoreet lectus pharetra a. Aenean ex nunc, viverra ac est ut, malesuada rutrum tellus. Vestibulum vitae massa enim. Proin efficitur ex in volutpat porta. Nam at massa auctor, blandit ante nec, convallis lectus. Aliquam a consequat ex. Vivamus ut bibendum justo. Curabitur volutpat accumsan libero, sit amet accumsan nulla consequat nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla mollis elementum volutpat. Proin sit amet magna iaculis, ullamcorper massa non, placerat tortor. Morbi eros lacus, porta non dolor eu, auctor pharetra lacus. Aliquam laoreet auctor arcu sed ullamcorper. Fusce non justo ante. Vivamus placerat lobortis lobortis. Suspendisse nulla justo, tempus eget tortor ac, maximus laoreet neque.

Donec eu feugiat magna. Etiam sed posuere ex, a ullamcorper odio. Nullam at urna varius, eleifend nulla id, tristique sem. Proin urna metus, pulvinar mattis urna sollicitudin, dignissim commodo dui. Phasellus dictum condimentum erat eu accumsan. Mauris in imperdiet nunc. Nunc elementum nisl dui, sit amet ullamcorper arcu euismod id. Duis sollicitudin sem id accumsan tincidunt. Phasellus quis massa eu mi consequat suscipit. Nullam eros augue, facilisis eget ante ut, placerat tristique enim. Ut tellus lacus, fringilla ac tincidunt vel, fringilla in augue.

Integer faucibus imperdiet diam, quis pellentesque diam vestibulum eget. Donec euismod sodales augue, sed aliquet ante aliquam tempor. Nam sagittis ac neque ut dictum. Sed accumsan, mauris non imperdiet porttitor, ipsum lacus congue arcu, vel semper sem lectus vel ligula. Nulla diam leo, accumsan eleifend euismod id, congue id nulla. Aliquam faucibus eu erat quis venenatis. Pellentesque tristique convallis libero, in condimentum sapien suscipit euismod. Sed non orci vel ante tincidunt porta. Fusce ultricies diam non pretium efficitur. Morbi eu gravida nibh. Integer euismod sit amet libero iaculis gravida.
          </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at turpis tempus, dictum est nec, varius lacus. Aenean a lectus finibus, facilisis augue vel, efficitur mauris. Morbi lobortis nulla at quam viverra mollis. Donec non lacus tortor. Phasellus eget nibh tempor, facilisis quam a, congue urna. Nulla eleifend quam eu nisi semper semper. Maecenas ac fringilla metus. Maecenas luctus orci eu tortor consectetur, vel bibendum orci dictum. Proin molestie ligula nisi, a facilisis nunc pulvinar eu. Duis tempor dapibus pharetra. Duis in libero ultricies, gravida ante quis, hendrerit quam. Proin ornare sed risus ut ornare. Vestibulum sit amet urna nunc.

Morbi venenatis orci ex, sed tincidunt nulla fringilla nec. Nulla bibendum vehicula dapibus. Suspendisse sodales ultricies tellus, eget rhoncus dui egestas quis. Sed ac dignissim felis, eget congue quam. Sed gravida commodo lacus, ultricies varius felis condimentum nec. Maecenas ac rhoncus turpis. In in ante ac lectus cursus porttitor sed ac nibh.



          </p>

          </div>
          </Anime>
       </div>
     </main>
  </Layout>
  );
}
