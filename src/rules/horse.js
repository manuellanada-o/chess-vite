export const getMoveListForHorse = (BOARD, piece, posX, posY) => {
  const pieceColor = piece.substring(1, 2)
  let moveList = [
    { posX: posX+2, posY: posY+1},
    { posX: posX+2, posY: posY-1},
    { posX: posX-2, posY: posY+1},
    { posX: posX-2, posY: posY-1},
    { posX: posX+1, posY: posY+2},
    { posX: posX+1, posY: posY-2},
    { posX: posX-1, posY: posY+2},
    { posX: posX-1, posY: posY-2},
  ]
  moveList = moveList.filter(move => move.posX >= 0 && move.posX <= 7 && move.posY >= 0 && move.posY <= 7)
  moveList = moveList.filter(move => pieceColor !== BOARD[move.posX][move.posY]?.substring(1, 2))
  return moveList
}