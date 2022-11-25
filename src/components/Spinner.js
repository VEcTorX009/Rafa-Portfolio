import React, { Component } from "react";
export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex spinner justify-content-center my-3">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
