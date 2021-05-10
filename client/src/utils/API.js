import axios from "axios"

const API = {
  searchBook(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCHH5yFYgW_tFBPSXt9xKTUwgiJ4ApzOY0`)
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
