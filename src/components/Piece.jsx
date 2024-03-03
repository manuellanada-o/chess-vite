import { NULL } from '../constants'

// black pieces svg
import BK from '../assets/Chess_BK.svg'
import BQ from '../assets/Chess_BQ.svg'
import BB from '../assets/Chess_BB.svg'
import BH from '../assets/Chess_BH.svg'
import BR from '../assets/Chess_BR.svg'
import BP from '../assets/Chess_BP.svg'

// white pieces svg
import WK from '../assets/Chess_WK.svg'
import WQ from '../assets/Chess_WQ.svg'
import WB from '../assets/Chess_WB.svg'
import WH from '../assets/Chess_WH.svg'
import WR from '../assets/Chess_WR.svg'
import WP from '../assets/Chess_WP.svg'

export const Piece = ({ piece }) => {
  let img = null
  if (piece !== NULL) {
    const pieceImage = piece.substring(1, 3)
    switch(pieceImage) {
      case 'BK': img = BK; break
      case 'BQ': img = BQ; break
      case 'BB': img = BB; break
      case 'BH': img = BH; break
      case 'BR': img = BR; break
      case 'BP': img = BP; break
      case 'WK': img = WK; break
      case 'WQ': img = WQ; break
      case 'WB': img = WB; break
      case 'WH': img = WH; break
      case 'WR': img = WR; break
      case 'WP': img = WP; break
    }
  }

  return <div style={{
    position: 'absolute',
    lineHeight: 7,
    width: '100%',
    height: '50%',
    textAlign: 'center',
    color: '#777'
  }}><img src={img}/></div>
}
