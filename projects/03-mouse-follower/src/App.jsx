import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x :0, y: 0})

  useEffect(() => {
    console.log('effect ', {enabled})
      
    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log ('handleMove ', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }
     
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('Clean up')
      window.removeEventListener('pointermove',handleMove)
    } //limpia cada vez que se modifica la dependencia

    /*const handleMove =  (event) => {
    const {clientX, clientY} = event
    console.log('handleMove', {clientX, clientY})
    setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log("Clean Up");
      window.removeEventListener('pointermove',handleMove)
    }*/
  }, [enabled])
  
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '2px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: '-20px',
        top: '-20px',
        width: '40px',
        height: '40px',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        { enabled ? 'Desactivar' : 'Activar' } seguir puntero </button>
    </main>
  )
}

function App() {


  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
