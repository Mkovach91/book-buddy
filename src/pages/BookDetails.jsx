import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails, updateBookAvailability } from "../api/API";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
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
      if (response.success) {
        alert("Book added to profile!");
        setBook({ ...book, available: false }); 
      } else {
        alert("Book already checked out");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <img src={book.coverimage} alt={book.title} />

      {isLoggedIn && book.available && (
        <button onClick={handleCheckout}>Check Out</button>
      )}
    </>
  )
}

export default BookDetails;