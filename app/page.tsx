'use client'
import NavBar from '../components/NavBar'
import MainPage from '../components/MainPage'
import SecondPage from '../components/SecondPage'
import { useEffect, useState } from 'react'

export default function Main() {

  const [isMenuToggled, setMenuToggled] = useState(false)

  useEffect(() => {
    console.log('main ' + isMenuToggled)
  }, [isMenuToggled])

  return (
    <div className={`${isMenuToggled ? 'overflow-hidden h-screen' : ''}`}>
      <NavBar setMenuToggled={setMenuToggled}/>
      <MainPage />
      <SecondPage />
    </div>
  )
}
