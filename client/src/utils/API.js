import axios from "axios"

const API = {
  searchBook() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyA-sSrG5lyOYe0HUk19h6HzsAdG7VJTR2w")
  },
  saveBook(bookObj) {
    return axios.post("")
  },
  deleteBook(bookId) {
    return axios.delete("")
  },
  updateBook(bookId) {
    return axios.put('')
  }

}

export default API;
