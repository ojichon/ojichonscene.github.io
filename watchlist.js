

document.addEventListener("DOMContentLoaded", function (e) {
    let localItems = localStorage.getItem('watchlist');
    let watchlistArray = JSON.parse(localItems);
    e.preventDefault();
    document.getElementById('movies-container').innerHTML = renderMovies(watchlistArray);

})


function renderMovies(movieArray) {
    let movieHtmlArray = movieArray.map(function (currentMovie) {
      return `<div class="movie col-4 mb-4">
      <div class="card" style="width: 18rem;">
      <img src="${currentMovie.Poster}" class="card-img-top" alt="${currentMovie.Title}">
      <div class="card-body">
          <h5 class="movieTitle">${currentMovie.Title}</h5>
          <p class="releaseDate">${currentMovie.Year}</p>
          <a href="#" class="btn btn-primary addButton" ">Added!</a>
      </div>
   </div>
 </div>
 
 `
         
    });
    return movieHtmlArray.join("")
    
}

document.getElementById("home").onclick = function () {
    location.href = 'index.html'
}