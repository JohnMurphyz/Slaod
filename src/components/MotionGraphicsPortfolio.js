import React from "react"
import Anime from "react-anime"
import Video from "./Video"

export default function MotionGraphicsPortfolio() {
  const videoData = [
    
    "https://www.youtube.com/embed/XsSq4sQg9h4", // top left
    "https://www.youtube.com/embed/mvOUfy0IkEA", // top centre
    "https://www.youtube.com/embed/xKuvG4w1_QQ", // top right
    "https://www.youtube.com/embed/yPLAfWcm0_Q", // bottom left
    "https://www.youtube.com/embed/_h4BaV22zFY"
  ]
         
  return (
    <main className="mx-auto" style={{ width: "93%" }}>
      
        <div>
          <h4 className="pb-2 pt-3 mt-3 mb-1">
           
            A selection of Motion Graphics work
          </h4>

        <Anime delay={100} opacity={[0, 1]}>
          <div className="row pt-5 ">
            {videoData.map(video => (
              <Video src={video} />
            ))}
          </div>
        </Anime>

      </div>              
    </main>

  )
}
