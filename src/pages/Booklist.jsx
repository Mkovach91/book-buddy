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
    <div className="book-list-container">
      <h1>Book Listings</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <a href={`/books/${book.id}`} className="book-link">
              <h2>{book.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;