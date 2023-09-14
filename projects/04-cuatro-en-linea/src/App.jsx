import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { saveGameToStorage, resetGameFromStorage } from './logic/storage'
import { WinnerModal } from './components/WinnerModal'
import { useEffect } from 'react'


function App() {
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(16).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });

  // null si no hay ganador, false si hay empate.
  const [winner, setWinner] = useState(null)   

  const resetGame = () =>{
    setBoard(Array(16).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameFromStorage();

  }



  const updateBoard = (index) => {
    //No actualizamos posicion, si ya tiene algo o tenemos un ganador
    if (board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn  
    setBoard(newBoard)
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Revisamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti() // NPM install canvas-confetti -E
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    } 
  } 

  useEffect(() => {
    //guardamos el juego cada vez que cambie el turno o el board, creando un efecto. 
    saveGameToStorage({board, turn})
  }, [turn, board])

  return (
    <main className='board'>
      <h1>Cuatro en linea</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
             <Square 
             key={index}
             index={index}
             updateBoard={updateBoard} // SI EJECUTAMOS CON parentesis, REALIZA LA FUNCION CADA VEZ QUE RENDERIZA.
             >
              {square}
             </Square>
            )
          })
        }
      </section>
      <section className="turn">
      <Square isSelected={turn===TURNS.X}> 
        {TURNS.X}
      </Square>
      <Square isSelected={turn===TURNS.O}>
        {TURNS.O}
      </Square>
      </section>

      <section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
  )
}

export default App
