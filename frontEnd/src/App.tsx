import './App.css'
import {Route, Routes} from "react-router"
import Register from './componnents/register/Register'
import Login from './componnents/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
