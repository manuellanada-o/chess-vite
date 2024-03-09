import { NULL } from '../constants'

export const getMoveListForPawn = (BOARD, piece, posX, posY) => {
  const pieceColor = piece.substring(1, 2)
  const hasNotMoved = pieceColor === 'B' ? posX === 1 : posX === 6
  let moveList = []
  if (pieceColor === 'B' && (posX+1) <= 7) {
    if (BOARD[posX+1][posY] === NULL)
      moveList.push({ posX: posX+1, posY: posY+0})
    if (BOARD[posX+1][posY+1] !== NULL && pieceColor !== BOARD[posX+1][posY+1]?.substring(1, 2))
      moveList.push({ posX: posX+1, posY: posY+1})
    if (BOARD[posX+1][posY-1] !== NULL && pieceColor !== BOARD[posX+1][posY-1]?.substring(1, 2))
      moveList.push({ posX: posX+1, posY: posY-1})
  }
  else if (pieceColor === 'W' && (posX-1) >= 0) {
    if (BOARD[posX-1][posY] === NULL)
            moveList.push({ posX: posX-1, posY: posY+0})
    if (BOARD[posX-1][posY+1] !== NULL && pieceColor !== BOARD[posX-1][posY+1]?.substring(1, 2))
            moveList.push({ posX: posX-1, posY: posY+1})
    if (BOARD[posX-1][posY-1] !== NULL && pieceColor !== BOARD[posX-1][posY-1]?.substring(1, 2))
            moveList.push({ posX: posX-1, posY: posY-1})
    }
  if (hasNotMoved) {
    if (pieceColor === 'B' && BOARD[posX+1][posY+0] === NULL && BOARD[posX+2][posY+0] === NULL)
      moveList.push({ posX: posX+2, posY: posY+0})
    else if (pieceColor === 'W' && BOARD[posX-1][posY+0] === NULL && BOARD[posX-2][posY+0] === NULL)
      moveList.push({ posX: posX-2, posY: posY+0})
  }
  return moveList
}