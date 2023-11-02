import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import "../src/App.css";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='red'
          progress={this.state.progress}
        />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News setProgress={this.setProgress}
                key="business"
                pagesize={8}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={this.setProgress}
                key="entertainment"
                pagesize={8}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News setProgress={this.setProgress}
                key="general"
                pagesize={8}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={this.setProgress} key="health" pagesize={8} country="in" category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress={this.setProgress}
                key="science"
                pagesize={8}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={this.setProgress} key="sports" pagesize={8} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={this.setProgress}
                key="technology"
                pagesize={8}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
