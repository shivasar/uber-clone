import React from 'react'
import { Route, Routes } from 'react-router'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
     <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
        <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
         <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
     </Routes>
    </div>
  )
}

export default App
