import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Planets from './components/Planets'
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import * as bootstrap from 'bootstrap'

function App() {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, [])

  return (
    <>
      <h1>Fotografías de la NASA</h1>
      <Planets/>
    </>
  )
}

export default App
