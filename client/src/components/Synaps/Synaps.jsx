// import "./synaps.css";
// // import Check from "./Check";

// function check1() {
//   const correctLetters = document.querySelectorAll(".yellow");
//   correctLetters.forEach((letter) => {
//     letter.classList.remove("gainsboro");
//   });

//   const correctAnswers = ["game", "car", "day", "food"];
//   let score1 = 0;
//   const selectedLetters = [];

//   document.querySelectorAll(".gainsboro").forEach((cell) => {
//     cell.classList.remove("gainsboro");
//   });

//   const sortedSelectedLetters = selectedLetters.slice().sort().join("");

//   correctAnswers.forEach((answer) => {
//     const sortedAnswer = answer.split("").sort().join("");
//     if (sortedSelectedLetters === sortedAnswer) {
//       selectedLetters.forEach((letter) => {
//         document
//           .querySelector(`[data-letter="${letter}"]`)
//           .classList.add("yellow");
//       });
//       score1++;
//       document.getElementById("score").innerText = `Score: ${score1}`;
//       document.querySelectorAll(".yellow").forEach((cell) => {
//         cell.classList.add("disabled");
//       });

//       // Mark the word in the word list as found
//       document
//         .getElementById(`word${correctAnswers.indexOf(answer) + 1}`)
//         .classList.add("word-found");
//     }
//   });
//   // Clear the selected letters
//   selectedLetters.length = 0;

//   // Check if all correct answers have been found
//   if (score1 === correctAnswers.length) {
//     alert("Congratulations! You won!");
//     const disableGame1 = document.getElementById("disable_click1");
//     disableGame1.style.pointerEvents = "none";
//   }
// }

// function Synaps() {
//   window.onload = function () {
//     document.querySelectorAll("td").forEach((node) => {
//       if (!node.textContent) {
//         const randomLetters = Math.round(65 + Math.random() * 25);
//         node.textContent = String.fromCharCode(randomLetters);
//       }
//     });
//   };

//   document.querySelectorAll(".white1").forEach((td) => {
//     td.addEventListener("click", () => {
//       if (!td.classList.contains("yellow")) {
//         if (td.classList.contains("gainsboro")) {
//           td.classList.remove("gainsboro");
//           const index = selectedLetters.indexOf(td.getAttribute("data-letter"));
//           if (index !== -1) {
//             selectedLetters.splice(index, 1);
//           }
//         } else {
//           td.classList.add("gainsboro");
//           selectedLetters.push(td.getAttribute("data-letter"));
//         }
//       }
//     });
//   });

//   return (
//     // <>
//     <div className="container">
//       <div className="boxgrille">
//       <table>
//         <tr>
//         <td className="white1" data-letter="f">F</td>
//         <td className="white1" data-letter="o">O</td>
//         <td className="white1" data-letter="o">O</td>
//         <td className="white1" data-letter="d">D</td>
//         </tr>

//         <tr>
//         <td className="white1" data-letter="c">C</td>
//         <td className="white1" data-letter="a">A</td>
//         <td className="white1" data-letter="r">R</td>
//         <td className="white1" data-letter=""></td>
//         </tr>

//         <tr>
//         <td className="white1" data-letter="d">D</td>
//         <td className="white1" data-letter="a">A</td>
//         <td className="white1" data-letter="y">Y</td>
//         <td className="white1" data-letter=""></td>
//         </tr>

//         <tr>
//         <td className="white1" data-letter="g">G</td>
//         <td className="white1" data-letter="a">A</td>
//         <td className="white1" data-letter="m">M</td>
//         <td className="white1" data-letter="e">E</td>
//         </tr>
//       </table>
//       </div>
//       <br />
//       <div className="boxword">
//       <p>
//         <strong>Word List:0</strong>
//         <br />
//         <span id="word4">FOOD</span>
//         <br />
//         <span id="word3">CAR</span>
//         <br />
//         <span id="word2">DAY</span>
//         <br />
//         <span id="word1">GAME</span>
//       </p>
//       </div>
//       <br />
//       <div className="boxbutton">
//       <div id="direction">
//         <button className="button1" type="button" onClick={check1}>
//           Submit
//         </button>
//         <br />
//         <br />
//         <div id="score">Score: 0</div>
//       </div>
//       </div>
//       </div>
//     // </>
//   );
// }
// export default Synaps;
