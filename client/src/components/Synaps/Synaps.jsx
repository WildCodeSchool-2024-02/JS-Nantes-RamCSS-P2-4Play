import "./synaps.css";
import { useState, useEffect } from "react";

function Synaps() {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [grid, setGrid] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://trouve-mot.fr/api/sizemax/10/5");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const jsonData = await response.json();
        const extractedWordList = jsonData.map((item) => item.name);
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
        Array.from({ length: gridSize }, () => letters[Math.floor(Math.random() * letters.length)])
      );

      words.forEach((word) => {
        const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
        let row;
        let col;
        if (direction === "horizontal") {
          row = Math.floor(Math.random() * gridSize);
          col = Math.floor(Math.random() * (gridSize - word.length));
        } else {
          row = Math.floor(Math.random() * (gridSize - word.length));
          col = Math.floor(Math.random() * gridSize);
        }
        for (let i = 0; i < word.length; i += 1) {
          if (direction === "horizontal") {
            newGrid[row][col + i] = word[i];
          } else {
            newGrid[row + i][col] = word[i];
          }
        }
      });

      setGrid(newGrid);
    }
  }, [words]);

  const handleClick = (indexRow, indexCol) => {
    const letter = grid[indexRow][indexCol];
    const newSelectedLetters = [...selectedLetters];
    const letterIndex = newSelectedLetters.findIndex((item) => item.x === indexRow && item.y === indexCol);
    if (letterIndex !== -1) {
      // Si la lettre est déjà sélectionnée, la supprimer de la liste des lettres sélectionnées
      newSelectedLetters.splice(letterIndex, 1);
    } else {
      // Sinon, ajouter la lettre à la liste des lettres sélectionnées
      newSelectedLetters.push({ x: indexRow, y: indexCol, letter });
    }
    setSelectedLetters(newSelectedLetters);
  };

  return (
    <>
      <h2 id="title-synaps">Synapsyndrome</h2>
      <div className="container-synaps">
        <p id="score-synaps">Count: {count}</p>
        {grid.length > 0 && (
          <table className="table-class">
            <tbody>
              {grid.map((row, indexRow) => (
                <tr key={Math.random() * 1000}>
                  {row.map((letter, indexCol) => {
                    const isSelected = selectedLetters.some((item) => item.x === indexRow && item.y === indexCol);
                    return (
                      <td
                        key={Math.random() * 1000}
                        className={isSelected ? "selected" : ""}
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
            {words.map((word, index) => (
              <span key={word}>
                {word}
                {index !== words.length - 1 && <br />}
              </span>
            ))}
          </span>
        </p>
      </div>
      <button
        className="button-synaps"
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Submit
      </button>
    </>
  );
}

export default Synaps;
