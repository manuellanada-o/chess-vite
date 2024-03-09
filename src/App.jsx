import { useState } from 'react'
import './App.css'

import { Tile } from './components/Tile'
import { Piece } from './components/Piece'

import { PIECES, NULL, WHITE, BLACK, TILE_DIMENSION, BOARD_DIMENSION } from './constants'
const {
  PBK1, PBQ1, PBB1, PBB2, PBH1, PBH2, PBR1, PBR2, PBP1, PBP2, PBP3, PBP4, PBP5, PBP6, PBP7, PBP8,
  PWK1, PWQ1, PWB1, PWB2, PWH1, PWH2, PWR1, PWR2, PWP1, PWP2, PWP3, PWP4, PWP5, PWP6, PWP7, PWP8
} = PIECES

const BOARD = [
  [ PBR1, PBH1, PBB1, PBQ1, PBK1, PBB2, PBH2, PBR2 ],
  [ PBP1, PBP2, PBP3, PBP4, PBP5, PBP6, PBP7, PBP8 ],
  [ NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL ],
  [ NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL ],
  [ NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL ],
  [ NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL ],
  [ PWP1, PWP2, PWP3, PWP4, PWP5, PWP6, PWP7, PWP8 ],
  [ PWR1, PWH1, PWB1, PWQ1, PWK1, PWB2, PWH2, PWR2 ]
]

import { getMoveListForHorse } from './rules/horse'
import { getMoveListForPawn } from './rules/pawn'
import { getMoveListForRook } from './rules/rook'

const App = () => {
  const [selectedPos, setSelectedPos] = useState(NULL)
  const [selectedTile, setSelectedTile] = useState(NULL)
  const [nextMoveList, setNextMoveList] = useState([])

  const handleClick = (piece, posX, posY) => {
    console.log(`handleTileClick = { x: ${posX}, y: ${posY} }\n`)
    if (piece === selectedTile) return

    if (piece !== NULL) {
      const pieceClass = piece.substring(2, 3)
      if (pieceClass === 'P') {
        setNextMoveList(getMoveListForPawn(BOARD, piece, posX, posY))
      }
      else if (pieceClass === 'H') {
        setNextMoveList(getMoveListForHorse(BOARD, piece, posX, posY))
      }
      else if (pieceClass === 'R') {
        setNextMoveList(getMoveListForRook(BOARD, piece, posX, posY))
      }
      setSelectedTile(piece)
      setSelectedPos({ posX, posY })
    }
      
    if (selectedTile) {
      if (nextMoveList.find(next => next.posX === posX && next.posY === posY)) {
        BOARD[posX][posY] = selectedTile
        BOARD[selectedPos.posX][selectedPos.posY] = NULL
        setSelectedTile(NULL)
        setNextMoveList([])
      }
    }
    if (piece === NULL) {
      setSelectedTile(NULL)
      setNextMoveList([])
    }
  }

  const getBackgroundColor = (index, posX, posY) => {
    if (nextMoveList.find(next => next.posX === posX && next.posY === posY))
    return 'lime'
    return parseInt(index/8)%2===0 ? 
      (index%2===0 ? WHITE : BLACK) : 
      (index%2===0 ? BLACK : WHITE)
  }

  const getPosX = (index) => parseInt(index/8)
  const getPosY = (index) => index%8

  return (
    <>
      <div style={{
        width: `${BOARD_DIMENSION}px`,
        height: `${BOARD_DIMENSION}px`
      }}>
        {BOARD.flat().map((piece, index) =>
          <Tile
            key={index}
            posX={getPosX(index)}
            posY={getPosY(index)}
            dimension={TILE_DIMENSION}
            backgroundColor={getBackgroundColor(index, getPosX(index), getPosY(index))}
            piece={<Piece piece={piece}/>}
            handleClick={handleClick}
          />
        )}
      </div>
    </>
  )
}

export default App
