import React from "react"
import { Routes, Route } from "react-router-dom"
import BookList from "./pages/Booklist"
import BookDetails from "./pages/BookDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Account from "./pages/Account"

const App = () => {

  return (
    <>
      <h1>Book Buddy</h1>
      <Routes>
        <Route path="/book-list" element={<BookList />} />
        <Route path="/book-details" element={<BookDetails />} />
        <Route path="" element={<Login />} />
        <Route path="" element={<Register />} />
        <Route path="" element={<Account />} />
      </Routes>
    </>
  )
}

export default App
