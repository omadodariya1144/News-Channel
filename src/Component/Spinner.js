import React, { Component } from "react";
import loading from "../loading.gif.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img src={loading} alt="loading"></img>
      </div>
    );
  }
}
