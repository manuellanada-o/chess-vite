export const Tile = ({ posX, posY, dimension, backgroundColor, isHighLighted, piece, handleClick }) => {
  return <div
    style={{
      float: 'left',
      width: `${dimension}px`,
      height: `${dimension}px`,
      position: 'relative',
      backgroundColor: `${backgroundColor}`,
    }}
    onClick={()=>handleClick(piece.props.piece, posX, posY)}
  >{piece}</div>
}
