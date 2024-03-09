import { NULL } from '../constants'

export const getMoveListForKing = (BOARD, piece, posX, posY) => {
  const pieceColor = piece.substring(1, 2)
  let moveList = []

  if (posX < 7 && BOARD[posX+1][posY] === NULL)
    moveList.push({ posX: posX+1, posY })

  if (posX > 0 && BOARD[posX-1][posY] === NULL)
    moveList.push({ posX: posX-1, posY })

  if (posY < 7 && BOARD[posX][posY+1] === NULL)
    moveList.push({ posX, posY: posY+1 })

  if (posY > 0 && BOARD[posX][posY-1] === NULL)
    moveList.push({ posX, posY: posY-1 })

  if (posX < 7 && posY < 7 && BOARD[posX+1][posY+1] === NULL)
    moveList.push({ posX: posX+1, posY: posY+1 })

  if (posX < 7 && posY > 0 && BOARD[posX+1][posY-1] === NULL)
    moveList.push({ posX: posX+1, posY: posY-1 })

  if (posX > 0 && posY < 7 && BOARD[posX-1][posY+1] === NULL)
    moveList.push({ posX: posX-1, posY: posY+1 })

  if (posX > 0 && posY > 0 && BOARD[posX-1][posY-1] === NULL)
    moveList.push({ posX: posX-1, posY: posY-1 })

  if (posX < 7 && BOARD[posX+1][posY] !== NULL && pieceColor !== BOARD[posX+1][posY].substring(1, 2))
    moveList.push({ posX: posX+1, posY })

  if (posX > 0 && BOARD[posX-1][posY] !== NULL && pieceColor !== BOARD[posX-1][posY].substring(1, 2))
    moveList.push({ posX: posX-1, posY })

  if (posY < 7 && BOARD[posX][posY+1] !== NULL && pieceColor !== BOARD[posX][posY+1].substring(1, 2))
    moveList.push({ posX, posY: posY+1 })

  if (posY > 0 && BOARD[posX][posY-1] !== NULL && pieceColor !== BOARD[posX][posY-1].substring(1, 2))
    moveList.push({ posX, posY: posY-1 })

  if (posX < 7 && posY < 7 && BOARD[posX+1][posY+1] !== NULL && pieceColor !== BOARD[posX+1][posY+1].substring(1, 2))
    moveList.push({ posX: posX+1, posY: posY+1 })

  if (posX < 7 && posY > 0 && BOARD[posX+1][posY-1] !== NULL && pieceColor !== BOARD[posX+1][posY-1].substring(1, 2))
    moveList.push({ posX: posX+1, posY: posY-1 })

  if (posX > 0 && posY < 7 && BOARD[posX-1][posY+1] !== NULL && pieceColor !== BOARD[posX-1][posY+1].substring(1, 2))
    moveList.push({ posX: posX-1, posY: posY+1 })

  if (posX > 0 && posY > 0 && BOARD[posX-1][posY-1] !== NULL && pieceColor !== BOARD[posX-1][posY-1].substring(1, 2))
    moveList.push({ posX: posX-1, posY: posY-1 })

  return moveList
}