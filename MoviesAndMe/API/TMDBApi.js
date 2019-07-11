const API_TOKEN = "5584c4e9ebe65e0630f70de263205b48"

//méthode pour rechercher des films en fonction d'un test :
export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url) //appel de l'API
        .then((response) => response.json()) // then convertit la réponse de notre API en JSON et la retourne
        .catch((error) => console.log(error)) // En cas d'erreur, on passe automatiquement dans le  catch  et on affiche une erreur à l'écran.
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}