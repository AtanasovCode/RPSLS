import styled from "styled-components";
import { useState, useEffect } from "react";

//Importing Styles
import { Container, Rules } from "./Main";

//Importing components
import Score from "../components/Score";

const Result = ({
    playRound,
    result,
    playerIcon,
    computerIcon,
    showWinner,
    winner,
    reset,
}) => {

    useEffect(() => {
        playRound();
    }, [])

    return (
        <Container>
            <Score result={result} />

            <Selection>
                <Player>
                    <Icon
                        src={playerIcon}
                        alt="player selected icon"
                    />
                    <Title>
                        You picked
                    </Title>
                </Player>

                <Computer>
                    <Icon
                        src={computerIcon}
                        alt="player selected icon"
                    />
                    <Title>
                        The house picked
                    </Title>
                </Computer>
            </Selection>

            <WinnerContainer show={showWinner}>
                <Winner>
                    {winner}
                </Winner>

                <Replay
                    type="button"
                    value="Play Again"
                    onClick={() => reset()}
                />
            </WinnerContainer>

            <Rules
                type="button"
                value="rules"
            />
        </Container>
    );
}

export default Result;

const Selection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Player = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Computer = styled(Player)``;

const Icon = styled.img`
    width: 130px;
    height: 127.103px;
`;

const Title = styled.div`
    color: #FFF;
    text-align: center;
    text-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.20);
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 1.875px;
`;

const WinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transform: ${props => props.show ? "translateX(0)" : "translateX(-300%)"};

    ${props => props.show && `
        animation: slide .5s linear 1;
    `}

    @keyframes slide {
        0% {
            transform: translateX(-200%);
        }
        80% {
            transform: translateX(150px);
        }
        90% {
            transform: translateX(-60px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;

const Winner = styled.div`
    color: #FFF;
    text-align: center;
    text-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.20);
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

const Replay = styled.input`
    color: #3B4262;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    width: 100%;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    transition: all .4s ease;
    border: none;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #3B4262;
    }
`;