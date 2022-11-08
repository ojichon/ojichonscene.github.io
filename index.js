const movieArray = movieData;

function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function (currentMovie) {
    return `<div>
            <h4>${currentMovie.Title}</h4>
			<button class="add-button" data-imdbid=${currentMovie.imdbID}>Add Movie</button>
       </div>`;
  });
  return movieHtmlArray.join("");
}

function saveToWatchlist(movieID) {
  const movie = movieArray.find(function(currentMovie){
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist == null) {
    watchlist == [];
  }
  watchlist.push(movieArray);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
}




document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("search-form");
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("card").innerHTML = renderMovies(movieArray);
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-button")) {
      const movieID = event.target.dataset.imdbID;
      saveToWatchlist(movieID);
    }
  });
});
