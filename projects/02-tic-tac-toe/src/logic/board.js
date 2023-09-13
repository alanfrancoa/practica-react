import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos combinaciones ganadoras, para ver si x u o gana
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
         return boardToCheck[a];
      }
      
    }
    return null;
  }

  export const checkEndGame = (newBoard) => {
    //Revisamos si hay empate
    //En caso de que no haya mas lugares vacios en tablero.
    //NewBoard = ['x','o','x',null,'o',null,'x','o','x']
  return newBoard.every((square) => square !== null)
  }