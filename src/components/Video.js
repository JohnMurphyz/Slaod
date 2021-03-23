import React from "react"

export default function Video(props) {
  return (
    <div className="col-lg-4 col-sm-12 pb-3 ">
      <iframe
        title={props.key}
        width="560"
        height="315"
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>{" "}
    </div>
  )
}
