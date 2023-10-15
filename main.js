let movieNameRef = document.getElementById('movieName');
let btnRef = document.getElementById('searchBtn');
let result = document.getElementById('result');

//fetch data fn
async function fetchMovie() {
  let title = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${title}&apikey=${key}`;
  if (title.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter movie title</h3>`;
  } else {
    const response = await fetch(url);
    const movie = await response.json();
    console.log(movie);

    result.innerHTML = `
    <div class="info">
      <img src=${movie.Poster} class="poster">
        <div>
          <h2 class="movieTitle">${movie.Title}</h2>
          <h4 class="imdb">IMDb: ${movie.imdbRating}</h4>
          <div class="ratingRuntime">
            <span class="raiting">${movie.Rated}</span>
            <span class="year">${movie.Year}</span>
            <span class="runtime">${movie.Runtime}</span>
          </div>
            <div class="genre">
              <div>
                ${movie.Genre.split(',').join('</div><div>')}
              </div>
          </div>
        </div>
    </div>
    <div class="details">
      <h3>Plot:</h3>
      <p>${movie.Plot}</p>
      <h3>Cast:</h3>
      <p>${movie.Actors}</p>
    </div>
  `;
  }
}
