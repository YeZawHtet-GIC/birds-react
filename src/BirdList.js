import React from "react";
import { Link } from "react-router-dom";
//css
import "./css/birdlist.css";

export default function BirdList({ birds }) {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {birds.map((bird) => (
          <div className="col" key={bird.id} data-aos="zoom-in">
            <div className="card h-100 bird-card shadow rounded border-0">
              <Link to={`/bird/${bird.id}`} className="btn">
                <img
                  src={bird.ImagePath}
                  alt={bird.BirdEnglishName}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h2 className="card-title text-warning">
                    {bird.BirdMyanmarName}
                  </h2>
                  <h3 className="card-subtitle mb-2 text-muted">
                    {bird.BirdEnglishName}
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
