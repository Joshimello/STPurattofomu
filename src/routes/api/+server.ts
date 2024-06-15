import { PUBLIC_N2YO_KEY } from "$env/static/public";
import { json } from "@sveltejs/kit"

const baseUrl = 'https://api.n2yo.com/rest/v1/satellite'

const getSatelliteTLE = async (satelliteID: number) => {
  const url = `${baseUrl}/tle/${satelliteID}&apiKey=${PUBLIC_N2YO_KEY}`
  const response = await fetch(url, {
    mode: 'no-cors'
  })
  return response.json()
}

const getSatellitePositions = async (satelliteID: number, observerLat: number, observerLng: number, observerAlt: number, searchRadius: number) => {
  const url = `${baseUrl}/positions/${satelliteID}/${observerLat}/${observerLng}/${observerAlt}/${searchRadius}&apiKey=${PUBLIC_N2YO_KEY}`
  const response = await fetch(url)
  return response.json()
}

export const GET = async ({ url }) => {
  const satelliteID = Number(url.searchParams.get('id'))
  const searchRadius = Number(url.searchParams.get('s'))
  const positions = await getSatellitePositions(satelliteID, 0, 0, 0, searchRadius)
  return json(positions)
}