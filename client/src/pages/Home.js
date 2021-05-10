import React, { Component } from "react";
import API from "../utils/API";
import BookContainer from "../components/BookContainer"
class Home extends Component {
  state = {
    books: [],
    query: "Uylesses"
  }
  componentDidMount() {
    API.searchBook(this.state.query).then(res => {
      console.log(res)
      this.setState({books: res.data.items})
    })
  }
  render() {
    return (
     <BookContainer books={this.state.books} />
    )
  }
}

export default Home;