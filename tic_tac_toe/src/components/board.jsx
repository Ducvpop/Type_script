import { useState } from "react"
import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)

    const handlePlay = (position) => {
        const newGame = game.map((g, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
    }

    const listWinner = [
        [0,1,2], [0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8]
    ]

    const checkWinner = () => {
        for(let i = 0; i < listWinner.length; i++) {
            const [p1, p2, p3] = listWinner[i]
            if(game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        }
        return null
    }
    const squareHandleReset = () =>{
           setGame([null, null, null, null, null, null, null, null, null]);
           setPlayer(true)
    };
    return <>
    <h2 className="text-red-500">Winner is: {checkWinner()}</h2>
    <div className="grid grid-cols-3 gap-2 w-[240px]">
        <Square value={game[0]} position={0} handlePlay={handlePlay}/>
        <Square value={game[1]} position={1} handlePlay={handlePlay}/>
        <Square value={game[2]} position={2} handlePlay={handlePlay}/>
        <Square value={game[3]} position={3} handlePlay={handlePlay}/>
        <Square value={game[4]} position={4} handlePlay={handlePlay}/>
        <Square value={game[5]} position={5} handlePlay={handlePlay}/>
        <Square value={game[6]} position={6} handlePlay={handlePlay}/>
        <Square value={game[7]} position={7} handlePlay={handlePlay}/>
        <Square value={game[8]} position={8} handlePlay={handlePlay}/>
    </div>
    <button className="p-2 rounded-sm bg-red-500 mt-8 hover:bg-blue-500" onClick ={squareHandleReset} >Choi lai </button>
    </>
}

export default Board