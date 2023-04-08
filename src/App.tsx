import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { LoginBoard, LoginForm, LogoutButton, MainContainer } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ModalProvider from "./context/ModalContextProvider"

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer>
          <ModalProvider>
          <LoginBoard>
            <Routes>
              <Route path='/' element={<LoginForm />}/>
              <Route path='/auth' element={<LogoutButton />}/>
            </Routes>
          </LoginBoard>
          </ModalProvider>
        </MainContainer>
      </div>
    </Router>
  )
}

export default App
