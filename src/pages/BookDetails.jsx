

const BookDetails = async () => {
  const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
  const responseJson = await response.json();
  console.log(responseJson)
  return responseJson
}

export default BookDetails