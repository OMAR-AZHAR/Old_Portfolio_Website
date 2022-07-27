import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const templateparams = {
      from_name: name + " " + email,
      to_name: "blacktna08@gmail.com",
      feedback: message
    };
    emailjs
      .send(
        "service_q7sucb6",
        "template_njya4nm",
        templateparams,
        "user_mnNbDlxwRhEPzZBlpUG5a"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message Sent Successfully ✅✅ ")
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div>
        <div className="contact-me-card row">
          {" "}
          <div className="col-lg-6 col-md-5 col-sm-12 px-2 left-contact py-2">
            <span className="get-in-touch mx-4 my-5">Get in Touch</span>
            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_u25cckyh.json"
                background="transparent"
                speed="1"
                style={{ width: "300px" }}
                loop
                autoplay
              >
                {" "}
              </lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            {" "}
            <br />
            <form
              ref={form}
              className="d-flex flex-column card-contact-right"
              onSubmit={sendEmail}
            >
              <div className="input-group my-3 d-flex flex-column">
                <label> Name </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                  className="input-groups"
                  minLength="3"
                  maxLength="30"
                  pattern="[A-Za-z ]+"
                  title="Name Can't Contain Numbers or Special Characters"
                  required
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label> Email </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter your Email"
                  className="input-groups"
                  required
                />
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <label> Message </label>
                <textarea
                  required
                  minLength="30"
                  maxLength="150"
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter a Message for me! 💖"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Send Message"
                />
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
