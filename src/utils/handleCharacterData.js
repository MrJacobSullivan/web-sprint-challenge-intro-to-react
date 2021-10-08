export const handleCharacterData = (data, params) => {
  return data.map((character) => {
    return params.reduce((agg, param) => {
      return Object.assign(agg, { [param]: character[param] })
    }, {})
  })
}
