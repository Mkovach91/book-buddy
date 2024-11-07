import React from "react"
import { useEffect, useState } from "react"
import { getBooks } from '../api/API.js'

const BookList = () => {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data); 
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
  
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Listings</h1>
        <ul>
          {books.map((book) => (
          <li key={book.id}>
          <a href={`/books/${book.id}`}>{book.title}</a>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default BookList;