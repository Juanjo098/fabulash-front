export const PersonalCard = ({ img, name, experince, starsNumber }) => {
  const MAX_STARS = 5
  const starsArray = Array.from({ length: MAX_STARS }, (_, index) => index + 1)

  return (
    <div className='personal'>
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
