
// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
 // Add code you want to run on page load here
}

const URL = 'https://ghibliapi.herokuapp.com/films/';

let headerThree = document.querySelector('h3');
let movieYear = document.getElementById('year');
let details= document.getElementById('description');
let title = document.getElementById('titles');


const ul = document.querySelector("ul")

function getTitles(movies) {
  let title = new set();
  for (let movie of movies) {
    title.add(movie.title);
  }
  const dropdown = document.getElementById('titles');

  for (let title of titles) {
    const option = document.createElement('option');
    option.textContent = titles;
    option.value = titles;

    dropdown.append(option);

    title.addEvenListener('click', function () {
      headerThree.innerHTML = getTitles.release_date;
    });
  }
  return [...title];
}
fetch('https://ghibliapi.herokuapp.com/films/')
  .then((response) => response.json())
  .then((json) => {
    getTitles(json);
  })
  .catch((error) => 
  console.log(error));




// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
//dont delete line below
setTimeout(run, 1000);
