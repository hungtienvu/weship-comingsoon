import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>What to know more what we do? Send me an email</p>
        <p>
          <a href="mailto:hung@weship.dev?subject=Hello weship.dev">
            hung@weship.dev
          </a>
        </p>
        {/* <button onClick={() => this.modal()}>Click Me</button> */}
        {/* <div id="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Optin;
