import React from "react";
import ContactPage from "../pages/ContactPage";

function Contact() {
  function contactHandle(e){
      e.preventDefault();
      alert('Message Send Successfully!');
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card py-4 px-3 mt-5">
            <h4>Send us a message</h4>
            <hr />
            <form>
              <div className="form-group mt-4 mb-3">
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="form-control mt-3"
                />
              </div>
              <div className="form-group mt-4 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control mt-3"
                />
              </div>
              <div className="form-group mt-4 mb-3">
                <label htmlFor="subject">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="form-control mt-3"
                />
              </div>
              <div className="form-group mt-4 mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="form-control mt-3"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-group mt-4 mb-3">
                <input
                onClick={contactHandle}
                  style={{ background: "#f48840", color: "#fff" }}
                  required
                  type="submit"
                  name="btn"
                  value={"Send Message"}
                  className="btn w-100 mt-3 float-center"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row mt-5">

      <div class="col-lg-12">
        <div id="map">
          <iframe
            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowfullscreen
            width={"100%"}
            height={"400px"}
          ></iframe>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
