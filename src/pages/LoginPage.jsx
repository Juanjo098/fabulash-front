import img1 from '../img/Dark-open-eye-cropped.png'
import '../css/styles_login.css'
import { Link } from 'react-router-dom'

function LoginPage () {
  return (
    <div className='background-login'>
      <div className='center-content'>
        <div className='top'>
          <h1 className='title'>Fabulash</h1>
          <img src={img1} className='fabulash-logo' />
        </div>
        <div className='login'>
          <h2>Login</h2>
          <form className='login-form'>
            <input className='form-control' type='email' placeholder='Email' />
            <input className='form-control' type='password' placeholder='Contraseña' />
          </form>
          <div className='boton'>
            <Link to='/' className='submit-button'>Ingresar</Link>
            <Link to='/register' className='register-link'>¿No tiene cuenta? Registrese aqui!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
