// function emptyCoiffeur(solution) {
//   //   const length = insult.slang.length;
//   //   const arr = new Array(length).fill("-").join();
//   //     return arr;

//   return new Array(solution.nom.length).fill("-").join("");
// }

// function MotifGame({ solution }) {
//   return <></>;
// }

// export default MotifGame;

// import { useEffect } from "react";
// import useMotif from "./useMotif";
// import Grid from "./Grid";

// function MotifGame({ solution }) {
//   const { currentGuess, guesses, turn, isCorrect, handleKeyup } =
//     useMotif(solution);

//   useEffect(() => {
//     window.addEventListener("keyup", handleKeyup);

//     return () => window.removeEventListener("keyup", handleKeyup);
//   }, [handleKeyup]);

//   return (
//     <div>
//       <div>Current Guess - {currentGuess}</div>
//       {/* <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} /> */}
//     </div>
//   );
// }

// export default MotifGame;
