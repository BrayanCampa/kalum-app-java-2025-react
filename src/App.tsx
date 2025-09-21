import { CssBaseline } from '@mui/material'
import './App.css'
import { AppBarMenu } from './components/layout/AppBarMenu'
import { useState } from 'react'
import { SideNav } from './components/layout/SideNav'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { LoginForm } from './components/auth/LoginForm'
import Swal from 'sweetalert2'

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlerDrawerToggle = () => setDrawerOpen(!drawerOpen);

const handlerLogout = () => {
  Swal.fire({
    title: "Logout",
    text: "Estas seguro de cerrar sesion?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
  }).then((result) => {
    if (result.isConfirmed) {
        window.location.href = "/login";
    }
  });
};

  return (
    <Router>
      <CssBaseline />
      <AppBarMenu onMenuClick={handlerDrawerToggle} onLogout={handlerLogout}></AppBarMenu>
      <SideNav open={drawerOpen} onClose={handlerDrawerToggle}></SideNav>
      <Routes>
        <Route path='/login' element={<LoginForm onLoginSuccess={() => window.location.href = 'wwww.google.com.gt'}/>}/>
      </Routes>
    </Router>

  )
}

export default App
