import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import { PersonalContext } from '../context/personal.jsx'
import { useContext } from 'react'
import '../css/styles_personal.css'
import { ServiceCard } from '../components/ServiceCard.jsx'

function ServicesPage () {
  const { isSelected } = useContext(PersonalContext)
  const { data, loading } = useFetch('http://127.0.0.1:8000/services')
  const buttonClass = isSelected?.service !== 0 ? 'button-personal selected' : 'button-personal'

  const handleNext = (e) => {
    if (isSelected?.service === 0) {
      e.preventDefault()
    }
  }

  return (
    <div className='row-content'>
      <Link to='/' className='back-arrow'>&#8249;</Link>
      <h1 className='title-personal'>Elija Servicio:</h1>
      <div className='services'>
        {loading && 'Loading...'}
        {data?.map(({ clvser, nombre, descripcion }) => {
          return (
            <ServiceCard key={clvser} clvser={clvser} nombre={nombre} descripcion={descripcion} />
          )
        })}
      </div>
      <div className='button-container'>
        <Link onClick={handleNext} to='/personal' className={buttonClass}>Siguiente</Link>
      </div>
      <svg width='393' height='174' viewBox='0 0 393 174' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M121 29.8069C51.444 5.66477 17.5446 15.7252 0 35.1713V178H393V6.3374C329.5 -11 292.247 11.7019 267.5 35.1713C245.11 56.4056 183.5 51.4999 121 29.8069Z' fill='#2D2D2D' />
      </svg>
    </div>
  )
}

export default ServicesPage
