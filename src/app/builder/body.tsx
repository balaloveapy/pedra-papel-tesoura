'use client'
import { useEffect, useState } from "react"
import styled from "styled-components"
import { response } from "./responsive"

const Main = styled.main`
    margin-top: 25px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media(max-width: 500px){
        max-width: 300px;
        margin: 0 auto;
    }
`
const Placar = styled.div`
    padding: 10px 32px ;
    border: 1px solid white;
    display: flex;
    align-items: center;
    .red{
        position: relative;
        background-color:#d65e58 ;
        padding: 1px 4px;
    }
    .left{
        right: 50%;
        transform: translateX(40%);
    }
    .right{
        left: 50%;
        transform: translatex(-25%);
    }
    .wins{
        font-size: 32px;
    }
`
const Game = styled.div`
    .textGame{
        font-size: 32px;
        font-weight: bolder;
        .flex{
        margin: 40px 0;
        display: flex;
        gap: 25px;
        @media(max-width: 500px){
        flex-direction: column;
        }
        .maos{
            display: flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height: 120px;
            border: 3px solid white;
            text-align: center;
            border-radius: 100%;
            cursor: pointer;
            &:hover{
                transition:0.2s linear;
                background-color: white;
            }
            @media(max-width: 500px){
                border-radius: 0;
            }
        }
    }
    }
    .wins{
        margin-bottom: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 22px;
        justify-content: center;
        font-weight: bold;
        button{
            padding: 20px;
            border-radius: 10px;
            background-color:#d65e58;
            &:hover{
                transition: 0.2s all;
                opacity: 0.8;
            }
        }
    }
    
`
type props = {
    bot: number | null
}
export function Body() {
    const photo = ['👊', '✋', '✌️']
    const [values, setvalues] = useState<props>({ bot: null })
    const [wins, setwins] = useState({ wins: '', hand: '', you: 0, computer: 0 })
    const [endGame, setEndGame] = useState(true)
    useEffect(() => {
        const valor = Math.floor(Math.random() * ((photo.length - 1) - 0 + 1))
        setvalues({ ...values, bot: valor })
    }, [endGame])
    function choose(id: number) {
        console.log(values, endGame, id)
        if (endGame) {
            setEndGame(false)
            switch (id) {
                case 0:
                    if (values.bot == 2) {
                        setwins({ ...wins, wins: 'you wins', you: wins.you + 1 })
                        console.log('entrou 1')
                    }
                    if (values.bot == 1) {
                        setwins({ ...wins, wins: 'you lose', computer: wins.computer + 1 })
                        console.log('entrou 2')
                    }
                    if (values.bot == 0) {
                        setwins({ ...wins, wins: 'draw', computer: wins.computer + 1, you: wins.you + 1 })
                        console.log('entrou 3')
                    }
                    break
                case 1:
                    if (values.bot == 0) {
                        setwins({ ...wins, wins: 'you wins', you: wins.you + 1 })
                    }
                    if (values.bot == 2) {
                        setwins({ ...wins, wins: 'you lose', computer: wins.computer + 1 })
                    }
                    if (values.bot == 1) {
                        setwins({ ...wins, wins: 'draw',computer: wins.computer + 1, you: wins.you + 1  })
                    }
                    break
                case 2:
                    if (values.bot == 1) {
                        setwins({ ...wins, wins: 'you wins', you: wins.you + 1 })
                    }
                    if (values.bot == 0) {
                        setwins({ ...wins, wins: 'you lose', computer: wins.computer + 1 })
                    }
                    if (values.bot == 2) {
                        setwins({ ...wins, wins: 'draw', computer: wins.computer + 1, you: wins.you + 1 })
                    }
                    break
            }
        }

    }
    return (
        <Main >
            <Placar>
                <div className="red left">
                    <p>user</p>
                </div>
                <div className="wins">
                    {wins.you}:{wins.computer}
                </div>
                <div className="red right">
                    <p>comp</p>
                </div>
            </Placar>
            <Game>
                <div className="textGame">
                    <h1>Paper covers rock. You win!</h1>
                    <div className="flex">
                        {photo.map((a, id) => (
                            <div onClick={() => choose(id)} key={id} className="maos">
                                {a}
                            </div>
                        ))}
                    </div>
                </div>
                {!endGame &&
                    <div className="wins">
                        <p>{wins.wins} bot choice {values.bot && photo[values.bot]}</p>
                        <button onClick={() => setEndGame(true)}>Next round</button>
                    </div>
                }

            </Game>
        </Main>
    )
}