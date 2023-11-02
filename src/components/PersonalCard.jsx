import { useContext } from 'react'
import { PersonalContext } from '../context/personal'

export const PersonalCard = ({ idSelected, img, name, experince, starsNumber }) => {
  const MAX_STARS = 5
  const starsArray = Array.from({ length: MAX_STARS }, (_, index) => index + 1)

  const { isSelected, setSelected } = useContext(PersonalContext)

  const handleClick = () => {
    const newServiceState = { ...isSelected }
    if (newServiceState.employee === idSelected) {
      newServiceState.employee = 0
      setSelected(newServiceState)
    } else {
      newServiceState.employee = idSelected
      setSelected(newServiceState)
    }
  }

  const personalClass = isSelected.employee === idSelected ? 'personal selected' : 'personal'

  return (
    <div onClick={handleClick} className={personalClass}>
      <img src={img} className='personal-img' />
      <div className='info'>
        <h3 className='personal-name'>{name}</h3>
        <p className='personal-exerience'>{experince}</p>
        <div className='stars'>
          {starsArray.map((star) => (
            <i key={star} className={star <= starsNumber ? 'fa fa-star checked' : 'fa fa-star'} />
          ))}
        </div>
      </div>
    </div>
  )
}
