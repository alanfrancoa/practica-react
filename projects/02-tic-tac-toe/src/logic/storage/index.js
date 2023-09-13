export const saveGameToStorage = ({board, turn}) => {
     //guardamos la partida
     window.localStorage.setItem('board', JSON.stringify(board))
     window.localStorage.setItem('turn',turn)
}

export const resetGameFromStorage = () => {
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
}