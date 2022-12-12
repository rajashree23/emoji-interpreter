import "./App.css";
import { useState } from "react";
export default function App() {
  // var username = prompt("what name?");
  // const [counter, setCounter] = useState(0);
  // // var counter=0;
  // function likeClickHandler() {
  //   setCounter(counter + 1);
  // }
  const emojiDictionary = {
    "😊": "smiling",
    "😔": "sad",
    "😯": "surprised",
    "❤️": "love",
    "😴": "sleepy",
    "😕": "confused",
    "😢": "crying",
    "🍟": "french fries",
    "🐕": "dog",
    "🙃": "upside down",
    "✨": "sparkles",
    "⚽": "soccer ball"
  };
  var emojisWeKnow = Object.keys(emojiDictionary);
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    let meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Oops! We don't have meaning for the current emoji!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>

      <input
        placeholder="Put an emoji to understand the meaning!"
        onChange={emojiInputHandler}
      ></input>

      <h2>{meaning}</h2>

      <h3>Emojis we know</h3>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
