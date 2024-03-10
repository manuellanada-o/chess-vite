## chess-vite *(still a work in progress!)*
This is deployed on Netlify on the following link: [https://main--manuellanada-chess-vite.netlify.app/](https://main--manuellanada-chess-vite.netlify.app/)

An implementation of the board game chess using React.js and Javascript, all done in the front-end.
The ***BOARD*** is expressed as a two dimensional array of strings called ***PIECES***.
There is a naming convention used for the ***PIECES*** string given this following example
> PBP1

 - 1st letter P, stands for piece, this simply indicates that it is a chess board piece
 - 2nd letter B, indicates its color, B = black, W = white
 - 3rd letter P, indicates its class, in which in this case is a Pawn
 - 4th number, indicates its piece number, so for Pawns this goes to a maximum of 8

Below is a table which describes all piece class letters used:
| Letter | Piece class |
|--|--|
| P | Pawn |
| R | Rook |
| H | Knight |
| B | Bishop |
| Q | Queen |
| K | King | 

As such, the initial ***BOARD*** variable is expressed like this:

    const BOARD = [
      [ PBR1, PBH1, PBB1, PBQ1, PBK1, PBB2, PBH2, PBR2 ],
      [ PBP1, PBP2, PBP3, PBP4, PBP5, PBP6, PBP7, PBP8 ],
      [ null, null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null, null ],
      [ PWP1, PWP2, PWP3, PWP4, PWP5, PWP6, PWP7, PWP8 ],
      [ PWR1, PWH1, PWB1, PWQ1, PWK1, PWB2, PWH2, PWR2 ]
    ]
where in each change re-renders the whole chess board.