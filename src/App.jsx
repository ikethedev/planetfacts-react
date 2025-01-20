import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './components/topbar/topbar.jsx'
import ContentNavigation from './components/contentNav/contentNavigation.jsx'
import PlanetInfo from './components/planetInfo/planetInfo.jsx'

export default function App() {
  const [planetData, setPlanetData] = useState([])
  const [currentPlanet, setCurrentPlanet] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [currentInfo, setCurrentInfo] = useState('overview')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data.json')
      const data = await response.json()
      setPlanetData(data)
      console.log(data)
      setCurrentPlanet(data[0])
      console.log(data)
    }
    fetchData()
  }, [])




  const handlePlanetClick = (e) => {
    e.preventDefault();
    planetData.filter(planet => {
      if(e.target.parentElement.id === planet.name){
        setCurrentPlanet(planet); 
      }
    })
   setOpenMenu(!openMenu)
  }

  const handleContentNavClick = (e) => {
    setCurrentInfo(e.target.dataset.tab);
    console.log(currentInfo)
  }

  return (
    <main>
      <Topbar planetData={planetData} handlePlanetClick={handlePlanetClick} currentPlanet={currentPlanet} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <section className='main__content-container'>
        {currentPlanet && < PlanetInfo currentPlanet={currentPlanet} currentInfo={currentInfo} handleClick={handleContentNavClick}/>} 
      </section>
    </main>
  )
}