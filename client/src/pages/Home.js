import React, { Component } from "react";

class Home extends Component {
  state = {
    books: [],
    query: ""
  }
  render() {
    return (
      <h1> Im the Home Page </h1>
    )
  }
}

export default Home;