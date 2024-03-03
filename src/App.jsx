import { useState } from 'react'
import './App.css'

import { Tile } from './components/Tile'
import { Piece } from './components/Piece'

import { PIECES, NULL, WHITE, BLACK, TIME_DIMENSION, BOARD_DIMENSION } from './constants'
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
  [ PWR1, PWH1, PWB1, PWK1, PWQ1, PWB2, PWH2, PWR2 ]
]

const App = () => {
  const [selectedTile, setSelectedTile] = useState(NULL)
  const [selectedPos, setSelectedPos] = useState(NULL)

  const handleClick = (piece, posX, posY) => {
    console.log(`handleTileClick = { x: ${posX}, y: ${posY} }\n`)

    if (piece === selectedTile) return

    if (piece !== NULL) {
      setSelectedTile(piece)
      setSelectedPos({ posX, posY })
    }
      
    if (selectedTile) {
      BOARD[posX][posY] = selectedTile
      BOARD[selectedPos.posX][selectedPos.posY] = NULL
      setSelectedTile(NULL)
    }
  }

  const getBackgroundColor = (boardFlatIndex) => {
    return parseInt(boardFlatIndex/8)%2===0 ? 
      (boardFlatIndex%2===0 ? WHITE : BLACK) : 
      (boardFlatIndex%2===0 ? BLACK : WHITE)
  }

  return (
    <>
      <div style={{
        width: `${BOARD_DIMENSION}px`,
        height: `${BOARD_DIMENSION}px`
      }}>
        {BOARD.flat().map((piece, index) =>
          <Tile
            key={index}
            posX={parseInt(index/8)}
            posY={index%8}
            dimension={TIME_DIMENSION}
            backgroundColor={getBackgroundColor(index)}
            piece={<Piece piece={piece}/>}
            handleClick={handleClick}
          />
        )}
      </div>
    </>
  )
}

export default App
