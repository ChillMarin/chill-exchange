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

function getAssetsHistory(coin) {
  // new date nos da la hora del momento
  const now = new Date()
  // Timestamp de la fecha de ahora
  const end = now.getTime()
  // aqio se setea es para 1 dia anterios la fecha
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data)
}

export default {
  getAssets,
  getAssetsCripto,
  getAssetsHistory,
}
