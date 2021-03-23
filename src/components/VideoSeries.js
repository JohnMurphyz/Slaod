import React from "react"

export default function VideoSeries(props) {
  return (

    <div className="row row-cols-1 mt-4 mb-2 mx-auto">
        <div className="col-md-12 col-lg-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column mx- auto align-items-center">
              <h3 className="mb-0">
                <p className="text-dark series-box">{props.title}</p>
              </h3>
              <div className="mb-1 text-muted">{props.date}</div>
              <p className="card-text text-dark series-box mb-auto" >{props.description}</p>
            </div>
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
