import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Words() {
  const { isDarkMode } = useDarkMode();
  const [words, setWords] = useState<{ word:string; mean:string }[]>([]);
  const cellStyle = {
    backgroundColor: isDarkMode ? "#171c20" : "#f8f9fa",
    color: isDarkMode ? "#fff" : "#000",
    transition: "background-color 0.3s, color 0.3s",
  };
  fetch("/data/words.json")
    .then((res) => res.json())
    .then((data) => {
      setWords(data);
    });
  return (
    <div className="container">
      <h1 className="text-center">単語帳</h1>
      <p>
        むずかしいにほんごのふくしゅう
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={cellStyle}>単語</th>
            <th scope="col" style={cellStyle}>意味</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, idx) => (
            <tr key={idx}>
              <td style={cellStyle}>{word.word}</td>
              <td style={cellStyle}>{word.mean}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Words;
