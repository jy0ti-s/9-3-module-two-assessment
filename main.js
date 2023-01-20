
// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
 // Add code you want to run on page load here
}

const load_URL = 'https://ghibliapi.herokuapp.com/films/';

function collectTitles(movies){
    let title = new set ();
    for (let movie of movies){
        title.add(movie.title);
    }
    const dropdownmenu = document.getElementById("titles");

    for(let title of titles) {
        const option = document.createElement("option");
        option.textContent = titles;
        option.value = titles;

        dropdownmenu.append(option);

        movies.addEventListener('click',function () {
            headerThree.innerhtml = collectTitles.release_date;
        });
    }
    return [...title];

}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
//dont delete line below
setTimeout(run, 1000);
