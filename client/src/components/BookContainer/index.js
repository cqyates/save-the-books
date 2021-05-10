import React from "react";
import Container from 'react-bootstrap/Container'

function BookContainer({books}) {
  console.log(books)
  return (
   <Container>
     <ul>
   {books.map((book) => {
     return (
       <li>{book.volumeInfo.title}</li>
     )

   })}
   </ul>
   </Container>
  )
}

export default BookContainer