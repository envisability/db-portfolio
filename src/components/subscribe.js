import React from "react";

function Subscribe(props) {
  return (
    <form action="">
      <div className="input-group-overlay input-group-light form-group mb-2 pb-1">
        <input
          className="form-control appended-form-control"
          type="text"
          placeholder="Email address*"
        />
        <div class="input-group-append-overlay">
          <span class="input-group-text">
            <button class="btn btn-link bt-sm px-0" type="submit">
              <i class="cxi-arrow-right lead mt-n1"></i>
            </button>
          </span>
        </div>
      </div>
      <small className="form-text text-light">
        *Subscribe to my newsletter to receive early updates and new art pieces
        info.
      </small>
    </form>
  );
}

export default Subscribe;
