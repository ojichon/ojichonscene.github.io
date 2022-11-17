const movieArray = movieData;

function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function (currentMovie) {
    return `<div class="movie col-4 mb-4">
    <div class="card" style="width: 18rem;">
    <img src="${currentMovie.Poster}" class="card-img-top" alt="${currentMovie.Title}">
    <div class="card-body">
        <h5 class="movieTitle">${currentMovie.Title}</h5>
        <p class="releaseDate">${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary add-button" data-imdbid="${currentMovie.imdbID}">Add Movie</a>
    </div>
 </div>
</div>
`;
  });
  return movieHtmlArray.join("");
}


function saveToWatchlist(movieID) {
  console.log(movieID)
  const movie = movieData.find((currentMovie) => {
    console.log(movieID)
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist === null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem('watchlist', watchlistJSON);
  console.log(movie)

}





document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("search-form");
  myForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchString = document.getElementById("search-bar").value;
    const urlEncodedSearchString = encodeURIComponent(searchString);

    await fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
    .then(async function(response){
      return response.json();
    })
    .then(function(data){
      document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(data.Search);
      movieData = data.Search;
      
    })
    
    // document.getElementById("card").innerHTML = renderMovies(movieArray);
  
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-button")) {
      const movieID = event.target.dataset.imdbid;
      console.log(event.target.dataset)
      console.log(movieID)
      saveToWatchlist(movieID);
    }
  });
});

document.getElementById("myWatchlist").onclick = function () {
  location.href = 'watchlist.html'
}






// document.addEventListener('DOMContentLoaded', function() {// code here will execute after the document is loaded
//   document.addEventListener('click', function(event) {
//           if(event.target.classList.contains("add-button")) {
//               const movieID = event.target.dataset.imdbid;
//               saveToWatchList(movieID);
//           }
//         })
// });
///movies showing up in search bar//
  // const myForm = document.getElementById('search-form');//this renders out what we are retrieving from the API
  // myForm.addEventListener('submit',async function(e){
  //     e.preventDefault();
  //     const searchString = document.getElementsByClassName("search-bar")[0].value;
  //     const urlEncodedSearchString = encodeURIComponent(searchString);
  //     await fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
  //         .then(async function(response) {
  //             return await response.json();
  //         })
  //         .then(function(data) {//actual usuable data that we can do something with//
  //         document.getElementsByClassName("movie-container")[0].innerHTML = renderMovie(data.Search);// event listener code goes here
  //        movieData = data.Search;
  //         });
  // })
// const renderMovie = (movieArray) => {
//   console.log(movieArray)
//   const movieHtmlArray = movieArray.map(function(currentMovie) {
//       return ` <div class="movie">
//       <div class="card" style="width: 18rem;">
//       <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
//       <div class="card-body">
//         <h2 class="title">${currentMovie.Title}</h2>
//         <p class="release date">${currentMovie.Year}</p>
//         <a href="#" class="btn btn-primary add-button" data-imdbid=${currentMovie.imdbID}>Add movie</a>
//       </div>
//     </div>`
//   })
//   return movieHtmlArray.join('');
// }
// const saveToWatchList = (movieID) => {
//   const movie = movieData.find((currentMovie) => {
//       return currentMovie.imdbID == movieID;
//   })
//   let watchlistJSON = localStorage.getItem("watchlist");
//   let watchlist = JSON.parse(watchlistJSON);
//   if (watchlist == null) { //if they didn't have a watchlist yet//
//       watchlist = [];
//   }
//   watchlist.push(movie);
//   watchlistJSON = JSON.stringify(watchlist); //turns it back into a string, and then save it into local
//   localStorage.setItem("watchlist", watchlistJSON);
// }

