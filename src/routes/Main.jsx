import styled from "styled-components";

//Importing components
import Score from "../components/Score";

//Importing Choice Icons
import rock from '../assets/icons/rock.svg';
import paper from '../assets/icons/paper.svg';
import scissors from '../assets/icons/scissors.svg';
import lizard from '../assets/icons/lizard.svg';
import spock from '../assets/icons/spock.svg';



const Main = ({
    handlePlay,
    result,
}) => {

    return (
        <Container>
            <Score result={result} />

            <GameContainer>
                <Choice1>
                    <ChoiceImage 
                        src={scissors}
                        alt="scissors icon"
                        onClick={() => handlePlay("scissors")}
                    />
                </Choice1>

                <Choice23>
                    <ChoiceImage 
                        src={spock}
                        alt="spock icon"
                        onClick={() => handlePlay("spock")}
                    />
                    <ChoiceImage 
                        src={paper}
                        alt="paper icon"
                        onClick={() => handlePlay("paper")}
                    />
                </Choice23>

                <Choice45>
                    <ChoiceImage 
                        src={lizard}
                        alt="lizard icon"
                        onClick={() => handlePlay("lizard")}
                    />
                    <ChoiceImage 
                        src={rock}
                        alt="rock icon"
                        onClick={() => handlePlay("rock")}
                    />
                </Choice45>
            </GameContainer>

            <Rules
                type="button"
                value="Rules"
            />
        </Container>
    );
}

export default Main;

//Reusing the same container for both Main and Result
export const Container = styled.div`
    height: 100%;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 35px;
`;


//Styling the gameplay section:

const GameContainer = styled.div`
    width: 100%;
    max-width: 311px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 421px;
        margin-top: 55px;
    }

    @media (min-width: 1024px) {
        max-width: 472px;
        margin-top: 0;
    }
`;

const ChoiceSelect = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Choice1 = styled(ChoiceSelect)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Choice23 = styled(ChoiceSelect)`
    justify-content: space-between;
    margin-top: -25px;
    width: 90%;
`;

const Choice45 = styled(ChoiceSelect)`
    justify-content: space-evenly;
    width: 80%;
`;

const ChoiceImage = styled.img`
    width: 96px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 126px;
    }

    @media (min-width: 768px) {
        width: 145px;
        height: 148px;
    }
`;


export const Rules = styled.input`
    border: 1px solid #fff;
    color: #fff;
    border-radius: 8px;
    background-color: transparent;
    text-transform: uppercase;
    padding: 10px 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2.5px;
    cursor: pointer;

    @media (min-width: 1024px) {
        position: absolute;
        bottom: 32px;
        right: 32px;
    }
`;