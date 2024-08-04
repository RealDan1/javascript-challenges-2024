//create a new async function
async function fetchCats() {
  //wrap the await commands inside a try catch incase there is an error
  try {
    //after waiting for the fetch(await), drop the fetched data into catUrl
    const catUrl = await fetch(
      'http://thecatapi.com/api/images/get?format=src&type=gif'
    );
    //then log the url part of the catUrl
    console.log(catUrl.url);
  } catch (error) {
    //catch if there is an error
    console.log(error); //log the error
  }
}
//run the function
fetchCats();
