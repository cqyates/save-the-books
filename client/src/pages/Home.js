import React, { Component } from "react";
import API from "../utils/API"
class Home extends Component {
  state = {
    books: [],
    query: ""
  }
  componentDidMount() {
    API.searchBook().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <h1> Im the Home Page </h1>
    )
  }
}

export default Home;