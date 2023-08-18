import styled from "styled-components";
import logo from '../assets/logo.svg';

const Score = ({
    result,
}) => {
    return (
        <Container>
            <LogoContainer>
                <Logo
                    src={logo}
                    alt="app logo"
                />
            </LogoContainer>

            <Result>
                <ScoreTitle>
                    Score
                </ScoreTitle>
                <ScoreNumber>
                    {result}
                </ScoreNumber>
            </Result>
        </Container>
    );
}

export default Score;

const Container = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid ${props => props.theme.borderColor};
    padding: 10px;
    border-radius: 5px;

    @media (min-width: 1024px) {
        margin-bottom: 40px;
    }
`;


const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Logo = styled.img`
    height: 48px;
    width: 48px;

    @media (min-width: 768px) {
        width: 82px;
        height: auto;
    }

    @media (min-width: 1024px) {
        width: 108.84px;
        height: 108.08px;
    }
`;

const Result = styled.div`
    padding: 12px 25px;
    background-color: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.fontFamily};

    @media (min-width: 768px) {
        padding: 15px 30px;
    }

    @media (min-width: 1024px) {
        padding: 0;
        width: 150px;
        height: 114px;
    }
`;

const ScoreTitle = styled.div`
    color: ${props => props.theme.scoreTitle};
    text-align: center;
    font-size: 10px;
    font-family: ${props => props.theme.fontFamily};
    font-weight: 600;
    letter-spacing: 1.563px;
    text-transform: uppercase;

    @media (min-width: 1024px) {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2.5px;
    }
`;

const ScoreNumber = styled.div`
    color: ${props => props.theme.scoreNumber};
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;

    @media (min-width: 1024px) {
        font-size: 64px;
        font-family: Barlow Semi Condensed;
        font-weight: 700;
        line-height: 64px;
    }
`;