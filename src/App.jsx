import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'))
const RegisterPage = lazy(() => import('./pages/RegisterPage.jsx'))
const DatePage = lazy(() => import('./pages/DatePage.jsx'))

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
        path='/date'
        element={
          <Suspense fallback='Loading...'>
            <DatePage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default App
