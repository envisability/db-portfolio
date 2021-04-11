import React from "react";

function ContactForm(props) {
  return (
    <form className="row needs-validation" noValidate>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="contact-name">Name*</label>
          <input
            className="form-control"
            type="text"
            id="contact-name"
            placeholder="Your name"
            required
          />
          <div className="invalid-feedback">Please enter a username.</div>
        </div>
        <div className="form-group">
          <label htmlFor="contact-company">Company</label>
          <input
            className="form-control bg-image-0"
            type="text"
            id="contact-company"
            placeholder="Your name"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="contact-email">Email*</label>
          <input
            className="form-control"
            type="email"
            id="contact-email"
            placeholder="Your working email"
            required
          />
          <div className="invalid-feedback">Please enter an email.</div>
        </div>
        <div className="form-group">
          <label htmlFor="contact-project">Project title</label>
          <input
            className="form-control bg-image-0"
            type="text"
            id="contact-project"
            placeholder="Title your project"
          />
        </div>
      </div>
      <div className="col-12">
        <span>Approx. budget</span>
        <div className="cs-widget px-3">
          <div
            className="cs-range-slider"
            data-start-min="25000"
            data-start-max="75000"
            data-min="1000"
            data-max="100000"
            data-step="1000"
          >
            <div className="cs-range-slider-ui"></div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="form-group mt-2">
          <label htmlFor="contact-details">Project details*</label>
          <textarea
            className="form-control"
            id="contact-details"
            rows="3"
            placeholder="Brief project details"
            required
          ></textarea>
          <div className="invalid-feedback">Please leave a message.</div>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary btn-pill mt-md-4 mt-2">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
