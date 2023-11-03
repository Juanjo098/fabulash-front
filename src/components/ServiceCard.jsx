import { useContext } from 'react'
import { PersonalContext } from '../context/personal.jsx'

export const ServiceCard = ({ clvser, nombre, descripcion, style, img }) => {
  const { isSelected, setSelected } = useContext(PersonalContext)

  const handleClick = () => {
    const newServiceState = { ...isSelected }
    if (clvser === newServiceState?.service) {
      newServiceState.service = 0
    } else {
      newServiceState.service = clvser
      newServiceState.employee = 0
    }
    setSelected(newServiceState)
  }

  const serviceCardClass = isSelected?.service === clvser ? 'card-service selected' : 'card-service'

  return (
    <div onClick={handleClick} className={serviceCardClass} style={style}>
      <img src={img} className='service-img' />
      <strong className='service-name'>{nombre}</strong>
      <span className='service-description'>{descripcion}</span>
    </div>
  )
}
