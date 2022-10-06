import React, { useState } from "react"
import Anime from "react-anime"
import Video from "./Video"


export default function Portfolio(props) {
 
 // 6 Main Videos

  const videoData = [
    
    "https://www.youtube.com/embed/Fq-WEl8VUdI", // top left
    "https://www.youtube.com/embed/tjjYwaBWxtE", // top centre
    "https://www.youtube.com/embed/mvOUfy0IkEA", // top right
    "https://www.youtube.com/embed/nsVmbtWzUzU", // bottom left
    "https://www.youtube.com/embed/FZtUTDXnHvk", // bottom centre
    "https://www.youtube.com/embed/M9q4xcClkNw" //  bottom right
  ]



  return (
    <main className="mx-auto" style={{ width: "93%" }}>

        <div>
          <h4 className="pb-2 pt-3 mt-3 mb-1">
            {" "}
            A selection of Commisioned and Personal work{" "}
          </h4>
        </div>
      
        <Anime delay={100} opacity={[0, 1]}>
          <div className="row pt-5 ">
            {videoData.map(video => (
              <Video src={video} />
            ))}
          </div>
        </Anime>
    </main>
  )
}
