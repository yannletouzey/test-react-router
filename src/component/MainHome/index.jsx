import { useLocation } from 'react-router-dom'
import HomePage from './HomePage'
import './index.css'

const MainHome = () => {
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);
  return (
    <main className='main__home'>
      {currentLocation.pathname === '/' && <HomePage />}
    </main>
  )
}

export default MainHome
