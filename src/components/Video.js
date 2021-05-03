import React from "react"

export default function Video(props) {
  return (
    <div className="row row-cols-1 mt-4 mb-2 mx-auto">
      <div className="col-md-12 col-lg-12">
        <div className="card flex-md-row px-1 pt-1 pb-1 mb-4 box-shadow-light bg-red h-md-250">
          <iframe
            width="560"
            height="315"
            src={props.src}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  )
}
