import './App.css'
import {Route, Routes} from "react-router"
import Register from './componnents/register/Register'
import Login from './componnents/login/Login'
import Profile from './componnents/profile/Profile'
import { ProtectedRote } from './componnents/protectedRoute/protectedRoutw'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>

        <Route path='/login' element={<Login/>}/>

       <Route element={<ProtectedRote/>}>
          <Route path='/profile' element={<Profile/>}/>
       </Route>
       
      </Routes>
    </>
  )
}

export default App
