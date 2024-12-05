import React, { useState } from "react";
import "./LearnNumbers.css";
import audio1 from "../audio/audio1.mp3";
import audio2 from "../audio/audio2.mp3";
import audio3 from "../audio/audio3.mp3";
import audio4 from "../audio/audio4.mp3";
import audio5 from "../audio/audio5.mp3";
import audio6 from "../audio/audio6.mp3";
import audio7 from "../audio/audio7.mp3";
import audio8 from "../audio/audio8.mp3";
import audio9 from "../audio/audio9.mp3";
import audio10 from "../audio/audio10.mp3";

const data = [
    {
      key: "1",
      value: audio1,
    },
    {
      key: "2",
      value: audio2,
    },
    {
      key: "3",
      value: audio3,
    },
    {
      key: "4",
      value: audio4,
    },
    {
      key: "5",
      value: audio5,
    },
    {
      key: "6",
      value: audio6,
    },
    {
      key: "7",
      value: audio7,
    },
    {
      key: "8",
      value: audio8,
    },
    {
      key: "9",
      value: audio9,
    },
    {
      key: "10",
      value: audio10,
    },
  ];

const LearnNumbers = () => {
  const [audio, setAudio] = useState(null);

  const playAudio = (number) => {

    const audio = new Audio(number);
    setAudio(audio);
    audio.play();
  };

  return (
    <div className="learn-numbers">
      <h2>Learn Numbers</h2>
      <div className="numbers-grid">
        {data.map((value) => (
          <button key={value['key']} onClick={() => playAudio(value['value'])}>
            {value['key']}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearnNumbers;
