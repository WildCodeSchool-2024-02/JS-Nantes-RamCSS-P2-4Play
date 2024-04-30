import "./synaps.css"; // Importation du fichier CSS pour le style

// Importation des modules React nécessaires
import Confetti from "react-confetti-boom";
import { useState, useEffect } from "react";

function Synaps() {
  // Déclaration des états avec useState
  const [selectedLetters, setSelectedLetters] = useState([]); // Lettres sélectionnées
  const [words, setWords] = useState([]); // Liste des mots
  const [grid, setGrid] = useState([]); // Grille de lettres
  const [score, setScore] = useState(0); // Score
  const [foundWords, setFoundWords] = useState([]); // Mots trouvés
  const [showConfetti, setShowConfetti] = useState(false); // Affichage des confettis

  // Utilisation de useEffect pour effectuer une requête HTTP lors du chargement du composant
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://trouve-mot.fr/api/sizemax/10/5"); // Requête à l'API
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const jsonData = await response.json(); // Conversion de la réponse en JSON
        const extractedWordList = jsonData.map((item) =>
          item.name.toUpperCase()
        ); // Extraction des mots et mise en majuscules
        setWords(extractedWordList); // Mise à jour de la liste des mots
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error); // Gestion des erreurs
      }
    }
    fetchData(); // Appel de la fonction fetchData
  }, []); // Le tableau vide en tant que deuxième argument signifie que cette fonction s'exécute uniquement une fois après le premier rendu

  // Utilisation de useEffect pour générer la grille de lettres lorsque la liste des mots change
  useEffect(() => {
    if (words.length > 0) {
      // Initialisation de la grille
      const gridSize = 10;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const newGrid = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => "")
      );

      // Placement des mots dans la grille
      words.forEach((word) => {
        let wordPlaced = false;
        while (!wordPlaced) {
          const direction = Math.random() < 0.5 ? "horizontal" : "vertical"; // Sélection aléatoire de la direction
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
          for (let i = 0; i < word.length; i += 1) {
            if (
              (direction === "horizontal" && newGrid[row][col + i] !== "") ||
              (direction === "vertical" && newGrid[row + i][col] !== "")
            ) {
              validPosition = false;
              break;
            }
          }

          if (validPosition) {
            for (let i = 0; i < word.length; i += 1) {
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

      // Remplissage des cellules vides avec des lettres aléatoires
      for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1) {
          if (newGrid[i][j] === "") {
            newGrid[i][j] = letters[Math.floor(Math.random() * letters.length)];
          }
        }
      }

      setGrid(newGrid); // Mise à jour de la grille de lettres
    }
  }, [words]); // Cette fonction s'exécute à chaque changement de la liste des mots

  // Fonction pour gérer le clic sur une lettre de la grille
  const handleClick = (indexRow, indexCol) => {
    const letter = grid[indexRow][indexCol];
    const newSelectedLetters = [...selectedLetters]; // Copie de l'état actuel des lettres sélectionnées
    const letterIndex = newSelectedLetters.findIndex(
      (item) => item.x === indexRow && item.y === indexCol
    );
    if (letterIndex !== -1) {
      newSelectedLetters.splice(letterIndex, 1); // Suppression de la lettre si elle est déjà sélectionnée
    } else {
      newSelectedLetters.push({ x: indexRow, y: indexCol, letter }); // Ajout de la lettre à la liste des lettres sélectionnées
    }
    setSelectedLetters(newSelectedLetters); // Mise à jour de l'état des lettres sélectionnées
  };

  // Fonction pour vérifier les réponses lorsque le bouton de vérification est cliqué
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

    setScore((prevScore) => prevScore + motsTrouves.length); // Mise à jour du score

    const lettresSelectionneesMisesAJour = selectedLetters.map((item) => {
      if (motsTrouves.some((mot) => mot.includes(item.letter))) {
        return { ...item, found: true }; // Marquage des lettres trouvées comme trouvées
      }
      return item;
    });
    setSelectedLetters(lettresSelectionneesMisesAJour); // Mise à jour de l'état des lettres sélectionnées

    setFoundWords((prevFoundWords) => [...prevFoundWords, ...motsTrouves]); // Mise à jour de la liste des mots trouvés

    if (foundWords.length >= 4) {
      setShowConfetti(true); // Affichage des confettis si plus de 4 mots sont trouvés
    }
  };

  return (
    <div className="body-synaps">
      {/* Titre */}
      <h2 id="title-synaps">Synapsyndrome</h2>
      {/* Contenu principal */}
      <div className="container-synaps">
        {/* Affichage du score */}
        <p id="score-synaps">Score: {score}</p>
        {/* Affichage de la grille de lettres */}
        {grid.length > 0 && (
          <table className="table-class">
            <tbody>
              {grid.map((row, indexRow) => (
                <tr key={Math.random() * 1000}>
                  {row.map((letter, indexCol) => {
                    const isSelected = selectedLetters.some(
                      (item) => item.x === indexRow && item.y === indexCol
                    ); // Vérification si la lettre est sélectionnée
                    const isFound = selectedLetters.some(
                      (item) =>
                        item.x === indexRow && item.y === indexCol && item.found
                    ); // Vérification si la lettre est trouvée
                    return (
                      <td
                        key={Math.random() * 1000}
                        className={`${isSelected ? "selected" : ""} ${isFound ? "found" : ""}`} // Ajout des classes CSS en fonction de l'état de la lettre
                        onClick={() => handleClick(indexRow, indexCol)} // Gestion du clic sur la lettre
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
        {/* Affichage de la liste des mots */}
        <p id="wordlist">
          <strong>Word list: </strong>
          <br />
          <span>
            {words.map((word, index) => {
              const motTrouve = foundWords.includes(word); // Vérification si le mot est trouvé
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
      {/* Bouton de vérification */}
      <button
        className="button-synaps"
        type="button"
        onClick={verifierReponses}
      >
        Vérification
      </button>
      {/* Affichage des confettis */}
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
    </div>
  );
}

export default Synaps; // Exportation du composant Synaps
