import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
import data from '../../js/data'

const MainUser = () => {

  const { idParam } = useParams();
  
  const [dataState, setDataState] = useState(
    {
      id: 1,
      name: '',
      position: '',
      office: '',
      age: '',
      start_date: '',
      salary: ''
    }
  )

  useEffect(() => {
    data.forEach((item) => {
      if (idParam === `${item.id}`) {
        setDataState({
          id: item.id,
          name: item.name,
          position: item.position,
          office: item.office,
          age: item.age,
          start_date: item.start_date,
          salary: item.salary
        })
      }
    })
  }, [])
  
  return (
    <main className='main__user'>
      <ul>
        <li>
          <p>{dataState.name}</p>
        </li>
        <li>
          <p>{dataState.position}</p>
        </li>
        <li>
          <p>{dataState.office}</p>
        </li>
        <li>
          <p>{dataState.age}</p>
        </li>
        <li>
          <p>{dataState.start_date}</p>
        </li>
        <li>
          <p>{dataState.salary}</p>
        </li>
      </ul>
    </main>
  )
}

export default MainUser
