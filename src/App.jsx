import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

//Importing the main routes of the app
import Main from "./routes/Main";
import Result from "./routes/Results";

//Importing icons
import rock from './assets/icons/rock.svg';
import paper from './assets/icons/paper.svg';
import scissors from './assets/icons/scissors.svg';
import lizard from './assets/icons/lizard.svg';
import spock from './assets/icons/spock.svg';
import { useEffect } from "react";


const theme = {
  background: "radial-gradient(134.34% 134.34% at 50.00% 0%, #1F3757 0%, #131537 100%)",
  color: "#ffff",
  borderColor: "rgba(255, 255, 255, 0.29)",
  resultTitle: "#2A45C2",
  resultNumber: "#565468",
  fontFamily: "'Barlow Semi Condensed', sans-serif",
}

function App() {

  const [options, setOptions] = useState([
    {
      name: "rock",
      url: rock,
      wins: ["scissors", "lizard"]
    },
    {
      name: "paper",
      url: paper,
      wins: ["rock", "spock"]
    },
    {
      name: "scissors",
      url: scissors,
      wins: ["paper", "lizard"]
    },
    {
      name: "lizard",
      url: lizard,
      wins: ["spock", "paper"]
    },
    {
      name: "spock",
      url: spock,
      wins: ["scissors", "rock"]
    },
  ])


  //Conditionally rendering the two components
  const [main, setMain] = useState(true);
  const [showResult, setShowResult] = useState(false);

  //Set the player and computer choice
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerIcon, setPlayerIcon] = useState();
  const [computerIcon, setComputerIcon] = useState();

  //The total score displayed at top
  const [result, setResult] = useState(0);

  //Display who the winner is
  const [winner, setWinner] = useState("");

  //Show the winenr when the computer makes it's pick
  const [showWinner, setShowWinner] = useState(false);

  const handlePlay = (player) => {
    //Set result to active and main to inactive
    setShowResult(true);
    setMain(false);
    setPlayerChoice(player);

    options.forEach((option) => {
      if (option.name === player) setPlayerIcon(option.url);
    })
  }

  const playRound = () => {
    //Used for the computer random choice effect
    let count = 0;
    let randomPick = "";

    let interval = setInterval(() => {
      //Used to avoid delay for the first choice
      if (count === 0) {
        randomPick = computerPick();
        options.forEach((option) => {
          if (option.name === randomPick) {
            setComputerIcon(option.url);
          }
        })
        count++;
      }

      //Give computer random choice every time the interval runs
      randomPick = computerPick();
      options.forEach((option) => {
        if (option.name === randomPick) setComputerIcon(option.url);
      })
      count++;

      //When the count reaches 6,
      //check and see who won and increment or decrement the score
      if (count === 6) {
        setComputerChoice(randomPick);
        options.forEach((option) => {
          if (option.name === randomPick) {
            setComputerIcon(option.url);
            setComputerChoice(option.name);
          };
        })

        clearInterval(interval);

      }
    }, 180)
  }

  useEffect(() => {

    options.forEach((option) => {
      if (option.name === playerChoice) {
        if (option.wins.find((value) => value === computerChoice)) {
          setWinner("You Win");
          setShowWinner(true);
        } else {
          setShowWinner(true);
          setWinner("You Lose");
        }
      }
    })
  }, [computerChoice])

  useEffect(() => {
    options.forEach((option) => {
      if(option.name === playerChoice) {
        if(option.wins.find((value) => value === computerChoice)) {
          setResult(result + 1);
        }else {
          if(result > 0) {
            setResult(result - 1);
          }
        }
      }
    })
  }, [winner])


  const computerPick = () => {
    let random = Math.floor(Math.random() * options.length);

    return options[random].name;
  }

  const reset = () => {
    setShowResult(false);
    setMain(true);
  }


  return (
    <ThemeProvider theme={theme}>
      <Container>
        {main && <Main
          handlePlay={handlePlay}
          result={result}
        />}
        {showResult && <Result
          result={result}
          playerIcon={playerIcon}
          computerIcon={computerIcon}
          playRound={playRound}
          showWinner={showWinner}
          winner={winner}
          reset={reset}
        />}
      </Container>
    </ThemeProvider>
  )
}

export default App;

const Container = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  height: 100vh;
  max-width: 1366px;
`;
