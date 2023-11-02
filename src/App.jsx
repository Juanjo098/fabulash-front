import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './css/app.css'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'))
const RegisterPage = lazy(() => import('./pages/RegisterPage.jsx'))
const PersonalPage = lazy(() => import('./pages/PersonalPage.jsx'))
const SericesPage = lazy(() => import('./pages/ServicesPage.jsx'))

function App () {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback='Loading...'>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path='/login'
        element={
          <Suspense fallback='Loading...'>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path='/register'
        element={
          <Suspense fallback='Loading...'>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route
        path='/services'
        element={
          <Suspense fallback='Loading...'>
            <SericesPage />
          </Suspense>
        }
      />
      <Route
        path='/personal'
        element={
          <Suspense fallback='Loading...'>
            <PersonalPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default App
