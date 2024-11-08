import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails, updateBookAvailability } from "../api/API";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBookDetails(id);
      setBook(response.book);
    };
    fetchBook();

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token)

  }, [id])

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await updateBookAvailability(id, false, token);
      if (response.book && response.book.available === false) {
        alert("Book added to profile!");
        setBook(response.book); 
      } else {
        alert("Book already checked out");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="book-details-container">
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p><strong>Author:</strong> {book.author}</p>
      {book.coverimage && (
        <img src={book.coverimage} alt={book.title} width={400} />
      )}

      {isLoggedIn && book.available && (
        <button className="checkout-button" onClick={handleCheckout}>Check Out</button>
      )}
    </div>
  );
};

export default BookDetails;