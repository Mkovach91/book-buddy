const ApiTest = async() => {
  const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
  const responseJson = await response.json();
  console.log(responseJson)
  return responseJson
}
ApiTest();
export default ApiTest

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDk4OCwiZW1haWwiOiJtYXR0QG1haWwuY29tIiwiaWF0IjoxNzMxMDA5MzM2LCJleHAiOjE3MzE2MTQxMzZ9.pelRWs7RGXD_HM24d_o2ReuLGtdd6Tx8sg-6orYP-dc