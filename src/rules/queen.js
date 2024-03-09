import { NULL } from '../constants'

export const getMoveListForQueen = (BOARD, piece, posX, posY) => {
  const pieceColor = piece.substring(1, 2)
  let moveList = []
  let xIndex = -1
  let yIndex = -1

  xIndex = posX
  while (xIndex < 7 && BOARD[xIndex+1][posY] === NULL) {
    moveList.push({ posX: xIndex+1, posY })
    xIndex++
  }
  if (xIndex < 7 && BOARD[xIndex+1][posY] !== NULL && pieceColor !== BOARD[xIndex+1][posY].substring(1, 2))
    moveList.push({ posX: xIndex+1, posY })

  xIndex = posX
  while (xIndex > 0 && BOARD[xIndex-1][posY] === NULL) {
    moveList.push({ posX: xIndex-1, posY })
    xIndex--
  }
  if (xIndex > 0 && BOARD[xIndex-1][posY] !== NULL && pieceColor !== BOARD[xIndex-1][posY].substring(1, 2))
    moveList.push({ posX: xIndex-1, posY })

  yIndex = posY
  while (yIndex < 7 && BOARD[posX][yIndex+1] === NULL) {
    moveList.push({ posX, posY: yIndex+1 })
    yIndex++
  }
  if (yIndex < 7 && BOARD[posX][yIndex+1] !== NULL && pieceColor !== BOARD[posX][yIndex+1].substring(1, 2))
    moveList.push({ posX, posY: yIndex+1 })

  yIndex = posY
  while (yIndex > 0 && BOARD[posX][yIndex-1] === NULL) {
    moveList.push({ posX, posY: yIndex-1 })
    yIndex--
  }
  if (yIndex > 0 && BOARD[posX][yIndex-1] !== NULL && pieceColor !== BOARD[posX][yIndex-1].substring(1, 2))
    moveList.push({ posX, posY: yIndex-1 })

  xIndex = posX
  yIndex = posY
  while (xIndex < 7 && yIndex < 7 && BOARD[xIndex+1][yIndex+1] === NULL) {
    moveList.push({ posX: xIndex+1, posY: yIndex+1 })
    xIndex++
    yIndex++
  }
  if (xIndex < 7 && yIndex < 7 && BOARD[xIndex+1][yIndex+1] !== NULL && pieceColor !== BOARD[xIndex+1][yIndex+1].substring(1, 2))
    moveList.push({ posX: xIndex+1, posY: yIndex+1 })

  xIndex = posX
  yIndex = posY
  while (xIndex < 7 && yIndex > 0 && BOARD[xIndex+1][yIndex-1] === NULL) {
    moveList.push({ posX: xIndex+1, posY: yIndex-1 })
    xIndex++
    yIndex--
  }
  if (xIndex < 7 && yIndex > 0 && BOARD[xIndex+1][yIndex-1] !== NULL && pieceColor !== BOARD[xIndex+1][yIndex-1].substring(1, 2))
    moveList.push({ posX: xIndex+1, posY: yIndex-1 })

  xIndex = posX
  yIndex = posY
  while (xIndex > 0 && yIndex < 7 && BOARD[xIndex-1][yIndex+1] === NULL) {
    moveList.push({ posX: xIndex-1, posY: yIndex+1 })
    xIndex--
    yIndex++
  }
  if (xIndex > 0 && yIndex < 7 && BOARD[xIndex-1][yIndex+1] !== NULL && pieceColor !== BOARD[xIndex-1][yIndex+1].substring(1, 2))
    moveList.push({ posX: xIndex-1, posY: yIndex+1 })

  xIndex = posX
  yIndex = posY
  while (xIndex > 0 && yIndex > 0 && BOARD[xIndex-1][yIndex-1] === NULL) {
    moveList.push({ posX: xIndex-1, posY: yIndex-1 })
    xIndex--
    yIndex--
  }
  if (xIndex > 0 && yIndex > 0 && BOARD[xIndex-1][yIndex-1] !== NULL && pieceColor !== BOARD[xIndex-1][yIndex-1].substring(1, 2))
    moveList.push({ posX: xIndex-1, posY: yIndex-1 })

  return moveList
}