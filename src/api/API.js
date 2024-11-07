
const APIURL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export const getBooks = async () => {
  const response = await fetch(`${APIURL}/books`);
  const booksJson = await response.json();
  return booksJson.books;
};

