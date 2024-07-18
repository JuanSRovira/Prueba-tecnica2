import React from 'react'
import NavBar from '../Components/NavBar'
import Parade from '../src/assets/Parade.png'
import video from '../src/assets/Video.png'
import clienteCero from '../src/assets/ClienteCero.png'
import vMatrix from '../src/assets/vMatrix.png'

const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <div className='Texto-Home'>
        <h1 className='box'>1</h1>
        <h2 className='box'>Computadora</h2>
        <h1 className='box'>30</h1>
        <h2 className='box'>Usuarios</h2>
        <h1 className='box'>1,000</h1>
        <h2 className='box'>Posibilidades</h2>
      </div>
      <div className='carousel'><img src={Parade} alt='carousel' />
      </div>
      <button type='button' className='btn btn-primary d-grid gap-2  mx-auto'>DESCUBRE COMO</button>
      <div className='Second'>
        <h2>¿Qué es vCloudPoint?</h2>
        <p>Es una red de terminales que permite a múltiples usuarios el aprovechamiento efectivo y simultáneo de los recursos no explotados de una PC</p>
        <img src={video} alt='video' />
      </div>
      <div className='cards'>
        <div className='card'>
          <h4 className='card-title'>Special title treatment</h4>
          <h5 className='card-title'>Special title treatment</h5>
          <img src={clienteCero} className='card-img-top' alt='...' />
          <div className='card-body'>
            <p className='card-text'>El Cliente Cero de vCloudPoint no contiene partes móviles y centraliza todo el procesamiento y almacenamiento en una computadora central. Como resultado, no requiere instalación de controladores, administración de parches ni licencias o cuotas de sistemas operativos locales. Este dispositivo consume muy poca energía, es resistente a la manipulación, y es incapaz de almacenar ninguna información de manera local, proveyendo una terminal más segura.
            </p>
          </div>
        </div>
        <div className='card'>
          <h4 className='card-title'>Special title treatment</h4>
          <h5 className='card-title'>Special title treatment</h5>
          <img src={vMatrix} className='card-img-top' alt='...' />
          <div className='card-body'>
            <p className='card-text'>El software vMatrix Server Manager, ejecutado en el servidor, mejora la funcionalidad y usabilidad general del sistema compartido, ofreciendo intermediación de conexión, aceleración gráfica, redireccionamiento de audio y USB, y administración centralizada. Los administradores de IT pueden configurar, monitorear y gestionar los terminales y usuarios con simplicidad del lado del servidor a través de una consola frontal.</p>
          </div>
        </div>
      </div>
      <div className='beneficios'>
        <div className='beneficios-header'>
          <h2>Beneficios</h2>
          <h3>Principales beneficios comparado con el uso de PC tradicionales</h3>
        </div>
        <div className='beneficios-lower'>
          <h2>Reduce costos</h2>
          <h3>Principales beneficios comparado con el uso de PC tradicionales</h3>
        </div>
        <div className='card-container'>
          <div className='cardB'>Tarjeta 1</div>
          <div className='cardB'>Tarjeta 2</div>
          <div className='cardB'>Tarjeta 3</div>
          <div className='cardB'>Tarjeta 4</div>
        </div>
      </div>
    </div>
  )
}

export default Home
