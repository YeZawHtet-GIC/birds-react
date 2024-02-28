import { Link } from "react-router-dom"
import React from 'react'

function NotFound() {
  return (
    <div className="col-md-6 offset-3 text-center mt-5 bg-dark p-5 rounded text-warning">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link className="btn btn-outline-primary" to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;