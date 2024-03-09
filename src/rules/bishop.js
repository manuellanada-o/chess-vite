import { NULL } from '../constants'

export const getMoveListForBishop = (BOARD, piece, posX, posY) => {
  const pieceColor = piece.substring(1, 2)
  let moveList = []
  let xIndex = -1
  let yIndex = -1

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