import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
//import { Link } from "react-router-dom";

export default function ResumeModal() {
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  // const [fullscreen, setFullscreen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const VoterModal = (props) => {
    return (
      <div>
        <iframe //This is voter frame
          title={props.src}
          frameBorder="0"
          height="400px"
          src={props.src}
          width="100%"
        />
      </div>
    );
  };
  const AdminModal = (props) => {
    return (
      <div>
        <iframe
          target="_blank"
          // sandbox="allow-popups allow-same-origin allow-forms allow-scripts"
          title={props.src}
          frameBorder="0"
          height="400px"
          src={props.src}
          width="100%"
        />
      </div>
    );
  };

  return (
    <div>
      <a
        href=""
        id="/"
        className="nav-link"
        variant="primary"
        onClick={handleShow}
      >
        SIGN IN
      </a>
      {/* fullscreen={fullscreen} */}
      <Modal
        style={{ padding: "0 !important" }}
        // style={{ opacity: "0.95" }}
        // fullscreen={fullscreen}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            SIGN IN AS &nbsp;
            <Button onClick={() => setShown(!shown)}>Admin-ETA</Button> &nbsp;
            <Button onClick={() => setShown(!shown)}>Voter</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!shown ? (
            <VoterModal src="https://res.cloudinary.com/omara/image/upload/v1642568790/me_uin837.jpg" />
          ) : null}{" "}
          {shown ? (
            <AdminModal src="https://res.cloudinary.com/omara/image/upload/v1642568790/me_uin837.jpg" />
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <div className="col-sm-10 text-lg-start">
            <strong> Copyright &copy; 2022</strong>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Quit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
