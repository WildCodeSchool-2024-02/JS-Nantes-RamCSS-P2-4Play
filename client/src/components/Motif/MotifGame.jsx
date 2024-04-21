function MotifGame({ solution, input }) {
  return (
    <div>
      <div>{solution}</div>
      <div>{input}</div>
    </div>
  );
}

export default MotifGame;

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
