import "./synaps.css";
import { useState, useEffect } from "react";

function Synaps() {
  const [lettersSelected, setLettersSelected] = useState([]);
  // console.log("selected => ", lettersSelected);
  // État pour stocker la liste des mots extraits des données de l'API
  const [words, setWords] = useState([]);
  // État pour stocker la grille de lettres aléatoires
  const [grid, setGrid] = useState([]);
  // État pour stocker le compteur
  const [count, setCount] = useState(0); // Initialiser le compteur à zéro

  // Hook useEffect pour récupérer les données de l'API lors du montage du composant
  useEffect(() => {
    async function fetchData() {
      try {
        // Requête pour récupérer les données de l'API
        const response = await fetch("https://trouve-mot.fr/api/sizemax/10/5");

        // Vérification de la réponse
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        // Conversion de la réponse en format JSON
        const jsonData = await response.json();
        const extractedWordList = jsonData.map((item) => item.name);
        // Mise à jour de l'état avec les données récupérées
        setWords(extractedWordList);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    }
    // Appel de la fonction pour récupérer les données de l'API
    fetchData();
  }, []);

  // Hook useEffect pour générer la grille de lettres une fois que la liste des mots est disponible
  useEffect(() => {
    if (words.length > 0) {
      // Taille de la grille (par exemple 10x10)
      const gridSize = 10;
      // Lettres possibles
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // Génération de la grille de lettres aléatoires
      const newGrid = Array.from({ length: gridSize }, () =>
        Array.from(
          { length: gridSize },
          () => letters[Math.floor(Math.random() * letters.length)]
        )
      );

      // Placement des mots dans la grille
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

      // Mise à jour de l'état avec la nouvelle grille
      setGrid(newGrid);
    }
  }, [words]);

  // Hook useEffect pour ajouter des écouteurs d'événements aux cellules de la grille
  useEffect(() => {
    // Sélection de toutes les cellules de la grille
    const gridCells = document.querySelectorAll(".table-class td");
    
    // Ajout d'un écouteur d'événements à chaque cellule
    gridCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        // Gestion de l'interaction avec la cellule ici
        // console.log('Clic sur la cellule :', cell.textContent);
      });
    });

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      gridCells.forEach((cell) => {
        cell.removeEventListener("click", () => {
          // console.log('Clic sur la cellule :', cell.textContent);
        });
      });
    };
  }, [grid]);

  const handleClick = (indexRow, indexCol) => {
    setLettersSelected((prevValue) => [
      ...prevValue,
      { x: indexRow, y: indexCol },
    ]);
  };

  // Rendu du composant
  return (
    <>
      <h2 id="title-synaps">Synapsyndrome</h2>
      <p>Letters selected: {JSON.stringify(lettersSelected)}</p>
      <div className="container-synaps">
        {/* Afficher le compteur */}
        <p id="score-synaps">Count: {count}</p>
        {/* Affichage de la grille de lettres */}
        {grid.length > 0 && (
          <table className="table-class">
            <tbody>
              {grid.map((row, indexCol) => (
                <tr key={Math.random() * 1000}>
                  {row.map((letter, indexRow) => (
                    <td
                      className={indexRow === 5 && indexCol === 2 ? "try" : ""}
                      key={Math.random() * 1000}
                      onClick={() => handleClick(indexRow, indexCol)}
                    >
                      {letter}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Affichage de la liste des mots à trouver */}
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
      {/* Bouton pour incrémenter le compteur */}
      <button
        className="button-synaps"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Submit
      </button>
    </>
  );
}

export default Synaps;
