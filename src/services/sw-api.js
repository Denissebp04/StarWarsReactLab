export async function getAllStarships() {
  try {
    const response = await fetch('https://swapi.dev/api/starships/')
    if (!response.ok) {
      throw new Error('Failed to fetch starships')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching starships:', error)
    return { results: [] }
  }
} 