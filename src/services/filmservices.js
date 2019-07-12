

export default {
getfilms() {
  return fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
}
}
