import React from "react"
import { useEffect, useState } from "react"
import { getUserDetails, updateBookAvailability } from "../api/API"


const Account = () => {
  const [userDetails, setUserDetails] = useState('')

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const details = await getUserDetails(token);
        setUserDetails(details);
      } catch (err) {
        console.error("Error", err)
      }
    };
    fetchUserDetails();
  }, []);

  const handleReturnBook = async (bookId) => {
    const token = localStorage.getItem('token');

    try {
      const response = await updateBookAvailability(bookId, true, token);
      if (response.book && response.book.available === true) {
        alert("Book returned!");

        setUserDetails((previousDetails) => ({
          ...previousDetails,
          books: previousDetails.books.map((book) =>
            book.id === bookId ? { ...book, available: true } : book
          ),
        }));
      } else {
        alert("Error returning book.");
      }
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  

  return (
    <div className="page-container">
      <div className="account-container">
        <h2>Account Info</h2>
        {userDetails ? (
          <div>
            <p>First Name: {userDetails.firstname}</p>
            <p>Last Name: {userDetails.lastname}</p>
            <p>Email: {userDetails.email}</p>

            <h3>Checked-Out Books</h3>
            {userDetails.books && userDetails.books.length > 0 ? (
              <ul className="book-list">
                {userDetails.books.map((book) => (
                  <li key={book.id} className="book-item">
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p><img src={book.coverimage} alt={book.title} height={150} /></p>
                    <button onClick={() => handleReturnBook(book.id)}>Return Book</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No books checked out.</p>
            )}
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Account