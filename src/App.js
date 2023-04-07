import React, { useEffect } from 'react'
import MainRoute from './routes'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  return <MainRoute />
}

export default App
