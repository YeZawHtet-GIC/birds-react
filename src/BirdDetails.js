import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

export default function BirdDetails() {
  const { id } = useParams();
  const {
    data: bird,
    error,
    isPending,
  } = useFetch("https://birds-data-json.vercel.app/Tbl_Bird/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("https://birds-data-json.vercel.app/Tbl_Bird/" + bird.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="col-md-8 offset-md-2 bg-dark p-5 mt-3 rounded text-warning">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {bird && (
        <div>
          <h2>{bird.BirdMyanmarName}</h2>
          <h2>{bird.BirdEnglishName}</h2>
          <hr />
          <p>{bird.Description}</p>
          <img
            src={process.env.PUBLIC_URL + "/" + bird.ImagePath}
            alt={bird.BirdEnglishName}
            className="card-img-top img-fluid"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
          <hr />
          <button onClick={handleClick} className="btn btn-outline-danger mt-3">
            Delete
          </button>
          <button
            onClick={() => {
              navigate("/birds");
            }}
            className="btn btn-outline-primary mt-3 mx-3"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
