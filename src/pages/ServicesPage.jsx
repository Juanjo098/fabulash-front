import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import { PersonalContext } from '../context/personal.jsx'
import { useContext } from 'react'
import '../css/styles_personal.css'
import { ServiceCard } from '../components/ServiceCard.jsx'
import img1 from '../img/Dark-closed-eye-cropped.png'
import img2 from '../img/Dark-open-eye-cropped.png'

function ServicesPage () {
  const { isSelected } = useContext(PersonalContext)
  const { data, loading } = useFetch('http://127.0.0.1:8000/services')
  const buttonClass = isSelected?.service !== 0 ? 'button-personal selected' : 'button-personal'

  const handleNext = (e) => {
    if (isSelected?.service === 0) {
      e.preventDefault()
    }
  }

  const style1 = {
    backgroundColor: '#F4A93F'
  }
  const style2 = {
    backgroundColor: '#EE899E'
  }
  const style3 = {
    backgroundColor: '#7D7BB1'
  }

  return (
    <div className='row-content'>
      <Link to='/' className='back-arrow'>&#8249;</Link>
      <h1 className='title-personal'>Elija Servicio:</h1>
      <div className='services'>
        {loading && 'Loading...'}
        {data?.map(({ clvser, nombre, descripcion }, index) => {
          let style
          let img
          switch (index) {
            case 0:
              style = style1
              img = img2
              break
            case 1:
              style = style2
              img = img1
              break
            case 2:
              img = img2
              style = style3
              break
            default:
              style = {}
          }
          return (
            <ServiceCard key={clvser} clvser={clvser} nombre={nombre} descripcion={descripcion} style={style} img={img} />
          )
        })}
      </div>
      <div className='button-container-service'>
        <Link onClick={handleNext} to='/personal' className={buttonClass}>Siguiente</Link>
      </div>
    </div>
  )
}

export default ServicesPage
