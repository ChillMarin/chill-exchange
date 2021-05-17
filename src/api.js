const url = 'https://api.coincap.io/v2'
//Esta es a funcion fetch q solicita a esa url que nos de la informacion solicitada
function getAssets() {
  return fetch(`${url}/assets?limit=25`)
    .then((res) => res.json())
    .then((res) => res.data)
}

function getAssetsCripto(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data)
}

export default {
  getAssets,
  getAssetsCripto,
}
