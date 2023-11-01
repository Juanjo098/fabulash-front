import img from '../img/Dark-closed-eye-cropped.png'
import '../css/style_register.css'
import { Link } from 'react-router-dom'

function RegisterPage () {
  return (
    <div className='background-register'>
      <div className='center-content'>
        <Link to='/' className='arrow-container'>
          <p className='previous-round'>&#8249;</p>
        </Link>
        <div className='top'>
          <h1 className='title-register'>Fabulash</h1>
          <img src={img} className='register-logo' />
        </div>
        <div className='login'>
          <div className='input-register'>
            <h2 className='second-title-register'>Registro</h2>
            <form className='register-form'>
              <input type='text' className='form-control' id='nombre' placeholder='Nombre' />
              <input type='text' className='form-control' id='apellido' placeholder='Apellido' />
              <input type='tel' className='form-control' id='telefono' placeholder='Teléfono' />
              <input type='email' className='form-control' id='correo' placeholder='Correo' />
              <input type='password' className='form-control' id='contrasena' placeholder='Contraseña' />
              <input type='password' className='form-control' id='confirmar-contrasena' placeholder='Confirmar Contraseña' />
            </form>

          </div>
          <div className='boton'>
            <Link to='/login' className='register-button'>Registrarse</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
