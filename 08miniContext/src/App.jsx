import React from 'react'
import userContext from './Context/UserContext'
import UserContextProvider from './Context/userContextProvider'
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Hello Context API</h1>
      <Login/>
      
      <Profile/>
    </UserContextProvider>
  )
}

export default App
