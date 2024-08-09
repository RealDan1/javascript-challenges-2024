// Create a new async function
async function fetchCats() {
  // Wrap the await commands inside a try catch incase there is an error
  try {
    // After waiting for the fetch(await), drop the fetched data into catUrl
    const catUrl = await fetch(
      'http://thecatapi.com/api/images/get?format=src&type=gif'
    );
    // Then log the url part of the catUrl
    console.log(catUrl.url);
  } catch (error) {
    // Catch if there is an error
    console.log(error); // log the error
  }
}
// Run the function
fetchCats();
