export const fetchItems = async () => {
  try {
    const response = await fetch(
      'https://geo.api.gouv.fr/departements/49/communes?fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre',
    )
    if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`)
    return await response.json()
  } catch (err) {
    throw err
  }
}
