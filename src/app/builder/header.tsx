'use client'
import styled from "styled-components"

const Header = styled.header`
    background-color: white;
    font-size: 32px;
    padding:15px 0;
    color: black;
    font-weight: bolder;
    text-align: center;
`
export function HeaderText() {
    return (
        <Header>
            <h1>Rock Papel Scissors</h1>
        </Header>
    )
}