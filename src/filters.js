import numeral from 'numeral'

const dollarFilter = function (value) {
  if (!value) {
    return '$ 0'
  }

  return numeral(value).format('($ 0.00a)')
}

const percentFilter = function (value) {
    if (!value) {
        return '0%'
      }

    return `${Number(value).toFixed(2)}%`;
}

//SE colo solo export no default para que solo se exporta l funcion y no otro filtro que tenga aqui en el archivo
export { dollarFilter, percentFilter }
