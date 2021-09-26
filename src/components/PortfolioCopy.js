import React from "react"
import Anime from 'react-anime';
import Video from "./Video";







export default function Portfolio() {

const videoList [

  {key: 1, url:"https://www.youtube.com/embed/nsVmbtWzUzU"},
  {key: 2, url:"https://www.youtube.com/embed/sIbPK-5V_mA"},
  {key: 3, url:"https://www.youtube.com/embed/FiaHMV2BKgk"},
  {key: 4, url:"https://www.youtube.com/embed/HP3GVAV0AOY"},
  {key: 5, url:"https://www.youtube.com/embed/Pq6JQnirFlE"},
  {key: 6, url:"https://www.youtube.com/embed/vyPwgBU67aM"},
  {key: 7, url:"https://www.youtube.com/embed/HP3GVAV0AOY"},
  {key: 8, url:"https://www.youtube.com/embed/BGaNyW-n9FQ"},
  {key: 9, url:"https://www.youtube.com/embed/meAh_hpqLHw"},


]


const renderedVideos = videoList.map((video) =>
  <Video title={props.title} url={props.url} />
)





  return (

    <main className="mt-5">






      <Anime delay={(100)}
             scale={[.3, 1]}
             opacity={[0, 1]}>
             <h1 className="heading">film. edit. <span style={{color: 'red'}}>play</span></h1>
             <p className="pb-4">A selection of Commisioned, Promotional and Personal work</p>





        <div className="row mx-auto pt-4 ">

                 <div className="col-lg-4 col-sm-12 px-3">
                 <iframe title="Video one" width="560" height="315" src="https://www.youtube.com/embed/nsVmbtWzUzU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
                 <div className="col-lg-4 col-sm-12 ">
                 <iframe title="Video two"width="560" height="315" src="https://www.youtube.com/embed/sIbPK-5V_mA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div>
                 <div className="col-lg-4 col-sm-12">
                 <iframe title="Video three" width="560" height="315" src="https://www.youtube.com/embed/FiaHMV2BKgk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div>

        </div>





        <div className="row mx-auto pt-4">

          <div className="col-lg-4 col-sm-12">
          <iframe title="Video four" width="560" height="315" src="https://www.youtube.com/embed/HP3GVAV0AOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
          <div className="col-lg-4 col-sm-12">
          <iframe title="Video five" width="560" height="315" src="https://www.youtube.com/embed/Pq6JQnirFlE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
          <div className="col-lg-4 col-sm-12">
          <iframe title="Video six" width="560" height="315" src="https://www.youtube.com/embed/vyPwgBU67aM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>

        </div>


        <div className="row mx-auto pt-4">
              <div className="col-lg-4 col-sm-12">
              <iframe title="Video seven" width="560" height="315" src="https://www.youtube.com/embed/S4ExAYvGptA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
              <div className="col-lg-4 col-sm-12">
              <iframe title="Video eight" width="560" height="315" src="https://www.youtube.com/embed/BGaNyW-n9FQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div>
              <div className="col-lg-4 col-sm-12">
              <iframe title="Video nine" width="560" height="315" src="https://www.youtube.com/embed/meAh_hpqLHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>

        </div>

  </Anime>


  </main>

  );
}
