import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
//https://api.unsplash.com/ is theroot endpoint
//Unsplash Application Access key: TQipEYm-x_iF67dnxhpJl2Z2pmr2snAFbin7zlFx3g4
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  const fetchImages = async () => {
    setLoading(true)
    let url = `${mainUrl}?client_id=TQipEYm-x_iF67dnxhpJl2Z2pmr2snAFbin7zlFx3g4`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])
  return <h2>stock photos starter</h2>
}

export default App
