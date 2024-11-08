import React from "react"
import { Routes, Route } from "react-router-dom"
import BookList from "./pages/Booklist"
import BookDetails from "./pages/BookDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Account from "./pages/Account"
import ApiTest from "./api-test"
import NavBar from "./Navbar"

const App = () => {

  return (
    <>
      <NavBar />
      <h1>Book Buddy</h1>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/api-test" element={<ApiTest />} />
      </Routes>
    </>
  )
}

export default App
