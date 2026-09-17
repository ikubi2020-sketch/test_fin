import './App.css'
import {Route, Routes} from "react-router"
import Register from './componnents/register/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
