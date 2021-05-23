import React, { useState } from "react"
import Anime from "react-anime"
import Video from "./Video"
import VideoSeries from "./VideoSeries"
import Switch from "react-switch"

export default function Portfolio(props) {
  const videoData = [
    "https://www.youtube.com/embed/nsVmbtWzUzU",
    "https://www.youtube.com/embed/yg5Zpp6hoEU",
    "https://www.youtube.com/embed/sIbPK-5V_mA",
    "https://www.youtube.com/embed/FiaHMV2BKgk",
    "https://www.youtube.com/embed/3cfCSfetdRg",
    "https://www.youtube.com/embed/vyPwgBU67aM"
  ]

  const videoSeries = [
    {
      src:
        "https://www.youtube.com/embed/playlist?list=PLQcjoP6zMY_Ijv48dWnO46Eu9cfJFKAKa",
      title: "MOVE Fitness Programe",
      date: "2021",
      description:
        "An Exercise Programe produced for MOVE Dungarvan. A series of 70+ Exercise & Instructional Videos"
    },
    {
      src:
        "https://www.youtube.com/embed/playlist?list=PLQcjoP6zMY_J__zFiDhCbFORYqGS09rbN",
      title: "St Pats Lockdown Olympics",
      date: "2021",
      description:
        "Remote Editing and Motion Graphics for Baboró's Lockdown Olympics"
    },
    {
      src:
        "https://www.youtube.com/embed/playlist?list=PLQcjoP6zMY_IDQ7qHXE2EgubtT3deRxU8",
      title: "Diarmuid and Grainne DTP Production",
      date: "Early 2020",
      description:
        "A series detailing NUI Galway's Third Year Theatre Production of the play Diarmuid & Grainne."
    },
    {
      src:
        "https://www.youtube.com/embed/playlist?list=PLQcjoP6zMY_KvSfFLN1pWmbxX8IBsvNa1",
      title: "Theatre Trailers",
      date: "2018 - 2020",
      description:
        "A series of promotional videos created various Theatre Productions in Galway."
    }
  ]

  const [active, setActive] = useState(false)

  return (
    <main className="mx-auto" style={{ width: "93%" }}>
      {active ? (
        <div>
          <h4 className="pb-2 pt-5 mt-5 mb-1">
            {" "}
            Long term professional and personal projects{" "}
          </h4>
          <p> Collected Series work </p>
        </div>
      ) : (
        <div>
          <h4 className="pb-2 pt-5 mt-5 mb-1">
            {" "}
            A selection of Commisioned, Promotional and Personal work{" "}
          </h4>

          <p> Load Series work? </p>
        </div>
      )}

      <Switch
        checked={active}
        onChange={() => setActive(!active)}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />

      {active ? (
        <Anime delay={100} opacity={[0, 1]}>
          <div className="row pb-5 pt-5 ">
            {videoSeries.map(video => (
              <VideoSeries
                src={video.src}
                title={video.title}
                date={video.date}
                description={video.description}
              />
            ))}
          </div>
        </Anime>
      ) : (
        <Anime delay={100} opacity={[0, 1]}>
          <div className="row pt-5 ">
            {videoData.map(video => (
              <Video src={video} />
            ))}
          </div>
        </Anime>
      )}
    </main>
  )
}
