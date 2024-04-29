import "./synaps.css";
import Confetti from "react-confetti-boom";
import { useState, useEffect } from "react";

function Synaps() {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [foundWords, setFoundWords] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://trouve-mot.fr/api/sizemax/10/5");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const jsonData = await response.json();
        const extractedWordList = jsonData.map((item) => item.name.toUpperCase());
        setWords(extractedWordList);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      const gridSize = 10;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const newGrid = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => "")
      );

      words.forEach((word) => {
        let wordPlaced = false;
        while (!wordPlaced) {
          const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
          let row;
          let col;
          if (direction === "horizontal") {
            row = Math.floor(Math.random() * gridSize);
            col = Math.floor(Math.random() * (gridSize - word.length + 1));
          } else {
            row = Math.floor(Math.random() * (gridSize - word.length + 1));
            col = Math.floor(Math.random() * gridSize);
          }

          let validPosition = true;
          for (let i = 0; i < word.length; i+=1) {
            if (
              (direction === "horizontal" && newGrid[row][col + i] !== "") ||
              (direction === "vertical" && newGrid[row + i][col] !== "")
            ) {
              validPosition = false;
              break;
            }
          }

          if (validPosition) {
            for (let i = 0; i < word.length; i+=1) {
              if (direction === "horizontal") {
                newGrid[row][col + i] = word[i];
              } else {
                newGrid[row + i][col] = word[i];
              }
            }
            wordPlaced = true;
          }
        }
      });

      // Fill empty cells with random letters
      for (let i = 0; i < gridSize; i+=1) {
        for (let j = 0; j < gridSize; j+=1) {
          if (newGrid[i][j] === "") {
            newGrid[i][j] = letters[Math.floor(Math.random() * letters.length)];
          }
        }
      }

      setGrid(newGrid);
    }
  }, [words]);

  const handleClick = (indexRow, indexCol) => {
    const letter = grid[indexRow][indexCol];
    const newSelectedLetters = [...selectedLetters];
    const letterIndex = newSelectedLetters.findIndex((item) => item.x === indexRow && item.y === indexCol);
    if (letterIndex !== -1) {
      newSelectedLetters.splice(letterIndex, 1);
    } else {
      newSelectedLetters.push({ x: indexRow, y: indexCol, letter });
    }
    setSelectedLetters(newSelectedLetters);
  };

  const verifierReponses = () => {
    const motsTrouves = [];
    words.forEach((mot) => {
      let trouve = true;
      for (let i = 0; i < mot.length; i += 1) {
        const lettre = mot[i];
        const lettreTrouvee = selectedLetters.find(
          (item) => item.letter === lettre && !item.found
        );
        if (!lettreTrouvee) {
          trouve = false;
          break;
        }
      }
      if (trouve) {
        motsTrouves.push(mot);
      }
    });

    setScore((prevScore) => prevScore + motsTrouves.length);

    const lettresSelectionneesMisesAJour = selectedLetters.map((item) => {
      if (motsTrouves.some((mot) => mot.includes(item.letter))) {
        return { ...item, found: true };
      }
      return item;
    });
    setSelectedLetters(lettresSelectionneesMisesAJour);

    setFoundWords((prevFoundWords) => [...prevFoundWords, ...motsTrouves]);

    if (foundWords.length >= 4) {
      setShowConfetti(true);
    }
  };

  return (
    <>
      <h2 id="title-synaps">Synapsyndrome</h2>
      <div className="container-synaps">
        <p id="score-synaps">Score: {score}</p>
        {grid.length > 0 && (
          <table className="table-class">
            <tbody>
              {grid.map((row, indexRow) => (
                <tr key={Math.random() * 1000}>
                  {row.map((letter, indexCol) => {
                    const isSelected = selectedLetters.some((item) => item.x === indexRow && item.y === indexCol);
                    const isFound = selectedLetters.some((item) => item.x === indexRow && item.y === indexCol && item.found);
                    return (
                      <td
                        key={Math.random() * 1000}
                        className={`${isSelected ? "selected" : ""} ${isFound ? "found" : ""}`}
                        onClick={() => handleClick(indexRow, indexCol)}
                      >
                        {letter}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p id="wordlist">
          <strong>Word list: </strong>
          <br />
          <span>
            {words.map((word, index) => {
              const motTrouve = foundWords.includes(word);
              return (
                <span key={word} className={motTrouve ? "found-word" : ""}>
                  {word}
                  {index !== words.length - 1 && <br />}
                </span>
              );
            })}
          </span>
        </p>
      </div>
      <button
        className="button-synaps"
        type="button"
        onClick={verifierReponses}
      >
        Vérifier les réponses
      </button>
      {showConfetti && (
        <Confetti
          mode="boom"
          x={0.5}
          y={0.2}
          particleCount={200}
          deg={270}
          shapeSize={18}
          spreadDeg={45}
          effectInterval={2000}
          effectCount={4}
          colors={["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]}
        />
      )}
    </>
  );
}

export default Synaps;
