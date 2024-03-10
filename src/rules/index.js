import { getMoveListForPawn } from './pawn'
import { getMoveListForRook } from './rook'
import { getMoveListForHorse } from './horse'
import { getMoveListForBishop } from './bishop'
import { getMoveListForQueen } from './queen'
import { getMoveListForKing } from './king'

export const getNextMoveList = (BOARD, piece, posX, posY) => {
  const pieceClass = piece.substring(2, 3)
  switch (pieceClass) {
    case 'P': return getMoveListForPawn(BOARD, piece, posX, posY)
    case 'R': return getMoveListForRook(BOARD, piece, posX, posY)
    case 'H': return getMoveListForHorse(BOARD, piece, posX, posY)
    case 'B': return getMoveListForBishop(BOARD, piece, posX, posY)
    case 'Q': return getMoveListForQueen(BOARD, piece, posX, posY)
    default: return getMoveListForKing(BOARD, piece, posX, posY)
  }
}