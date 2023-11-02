import '../css/styles_personal.css'
import { PersonalCard } from '../components/PersonalCard.jsx'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import { PersonalContext } from '../context/personal.jsx'
import { useContext } from 'react'

function PersonalPage () {
  /*const data = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/61kw0caY68L._AC_SX679_.jpg',
      name: 'Jean Doe',
      especialidad: 'Maquillista',
      starsNumber: 4
    },
    {
      id: 2,
      img: 'https://media.licdn.com/dms/image/D4E22AQFbftSUOJcZyw/feedshare-shrink_2048_1536/0/1695837350432?e=1701907200&v=beta&t=pQ5HyS0t_-dnfFR0CooJAevpBw306PhMmfeUDzqrCyo',
      name: 'Jean Doe',
      especialidad: 'Maquillista',
      starsNumber: 3
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/61v0moQ+INL._AC_SX679_.jpg',
      name: 'Jean Doe',
      especialidad: 'Maquillista',
      starsNumber: 5
    }
  ]*/

  const { isSelected } = useContext(PersonalContext)
  const { data, loading } = useFetch(`http://127.0.0.1:8000/employees/${isSelected?.service}`)
  const buttonClass = isSelected?.employee !== 0 ? 'button-personal selected' : 'button-personal'

  return (
    <div className='row-content'>
      <Link to='/services' className='back-arrow'>&#8249;</Link>
      <h1 className='title-personal'>Elija Personal:</h1>
      <div className='lista-personal'>
        {data?.map(({ clvemp, nombre, apellido, descripcion, estrellas, imagen }) => {
          return (
            <PersonalCard key={clvemp} idSelected={clvemp} img={imagen} name={`${nombre} ${apellido}`} experince={descripcion} starsNumber={estrellas} />
          )
        })}
      </div>
      <div className='button-container'>
        <Link to='/personal' className={buttonClass}>Siguiente</Link>
      </div>
      <svg width='393' height='174' viewBox='0 0 393 174' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M121 29.8069C51.444 5.66477 17.5446 15.7252 0 35.1713V178H393V6.3374C329.5 -11 292.247 11.7019 267.5 35.1713C245.11 56.4056 183.5 51.4999 121 29.8069Z' fill='#2D2D2D' />
      </svg>
    </div>
  )
}

export default PersonalPage
