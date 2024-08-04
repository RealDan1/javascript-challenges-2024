async function fetchCats() {
  try {
    let catUrl = await fetch(
      'http://thecatapi.com/api/images/get?format=src&type=gif'
    );

    console.log(catUrl.url);
  } catch (error) {
    console.log(error);
  }
}

fetchCats();
