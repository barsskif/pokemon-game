import {useContext, useEffect, useState} from "react";
import {PokemonContext} from "../../../../context/PokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from 'react-router-dom';

import s from './style.module.css'
import PlayerBoard from "./component/PlayerBoard";
import Result from "../../../../components/Result";

const countWin = (board, player1, player2) => {
let player1Count = player1.length;
let player2Count = player2.length;

board.forEach(item =>{
    if(item.card.possession === 'red'){
        player2Count++
    }else{
        player1Count++
    }
})

    return [player1Count, player2Count]
}

const BoardPage = () => {
    const {pokemons, setPokemonsPlayer2} = useContext(PokemonContext)
    const [board, setBoard] = useState([])
    const [player2, setPlayer2] = useState([])
    const [player1, setPlayer1] = useState(()=>{
        return Object.values(pokemons).map(item=>({
            ...item,
            possession: 'blue'
        }))
    })
    const [choiceCard, setChoiceCard] = useState(null)
    const [steps, setSteps] = useState(0)
    const [youWin, setYouWin] = useState(null)
    const [typeGame, setTypeGame] = useState('')
    const history = useHistory();


    useEffect(async ()=>{
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await  boardResponse.json();

        setBoard(boardRequest.data)


        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        const player2Request = await player2Response.json()

        setPlayer2(()=> {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red',
            }))
        })
        setPokemonsPlayer2(player2Request)

    }, []);

    if (Object.keys(pokemons).length === 0){
        history.replace('/game');
    }

    const handleClickBoardPlate = async (position) => {

        if (choiceCard){
            const params = {
                position,
                card: choiceCard,
                board
            }
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            setBoard(request.data)

            if (choiceCard.player === 1 ){
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }
            if (choiceCard.player === 2 ){
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            setSteps(prevState => {
                const count = prevState +1
                return count;
            })
        };


    }

    useEffect(()=>{
if(steps === 9){
const [count1, count2] = countWin(board, player1, player2)
    if (count1 > count2){
        setYouWin(true)
        setTypeGame(prevState => 'win')
    }else if (count1 < count2){
        setTypeGame(prevState => 'lose')
        setYouWin(true)
    }else{
        setTypeGame(prevState => 'draw')
        setYouWin(true)
    }
}
    },[steps])



    return (
        <>
            <div className={s.root}>
                <div className={s.playerOne}>
                    <PlayerBoard
                        player={1}
                        cards={player1}
                        onClickCard={(cards) => setChoiceCard(cards)}
                    />
                </div>
                <div className={s.board}>

                      {
                          youWin ?
                              <Result  type={typeGame}/>
                        :  board.map((item)=>(
                                  <div
                                      key = {item.position}
                                      className={s.boardPlate}
                                      onClick={()=>{!item.card && handleClickBoardPlate(item.position)}}
                                  >
                                      {
                                          item.card && <PokemonCard {...item.card} isAct minimize/>
                                      }
                                  </div>
                              ))
                    }
                </div>
                <div className={s.playerTwo}>
                    <PlayerBoard
                        player={2}
                        cards={player2}
                        onClickCard={(card) => setChoiceCard(card)}
                    />
                </div>

            </div>
        </>
    );
};

export default BoardPage;