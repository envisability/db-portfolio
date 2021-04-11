import React from "react";
import ContactForm from "../components/contactForm";
import ExternalPortfolio from "../components/externalPortfolio";

function Contact(props) {
  return (
    <section className="container my-5 pt-md-4">
      <div>
        <h3 className="h6 mb-2 text-uppercase">Contact me</h3>
        <h1 className="mb-lg-5 mb-4 pb-1">Let's talk about you:</h1>
      </div>
      <div
        className="tab-pane fade show active"
        id="new-project"
        role="tabpanel"
        aria-labelledby="new-project-tab"
      >
        <p className="lead">
          Have a project in mind that you think I'd be a great fit for? I'd love
          to know what you're thinking.
        </p>
        <ContactForm />
      </div>
      <ExternalPortfolio />
    </section>
  );
}

export default Contact;
