import { useRef, useState } from "react";
import { KeyboardReact as Keyboard } from "react-simple-keyboard";

// DEPS: npm install react-simple-keyboard --save
// You just need KeyboardWrapper.jsx and keyboard-styles.css in a folder

// Mobile layout theme demo here :

// NB a lot of themes / demos use vanilla JS; you need to find the options used when a New Keyboard class call is made and then
// use those as props to pass to the <Keyboard /> component

// Docs for the library will all the possible options: https://hodgef.com/simple-keyboard/documentation/options/

import "react-simple-keyboard/build/css/index.css";
import "./KeyboardContainer.css";

function KeyboardContainer({ input, setInput }) {
  // State has been lifted up to parent game components
  // const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (changeInput) => {
    setInput(changeInput);
    // console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    // console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const newInput = event.target.value;
    setInput(newInput);
    keyboard.current.setInput(newInput);
  };

  return (
    <div>
      {/*  need to hide the input in the css - allow each game to display input how it wants */}
      <input
        // style={{ display: "none" }}
        value={input}
        // placeholder //
        onChange={onChangeInput}
      />

      <Keyboard
        // eslint-disable-next-line no-return-assign
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
          default: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L",
            "Z X C V B N M {backspace}",
            "{space} {ent}",
          ],
          shift: [
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "{shift} z x c v b n m {backspace}",
            "{numbers} {space} {ent}",
          ],
          numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"],
        }}
      />
    </div>
  );
}

export default KeyboardContainer;
