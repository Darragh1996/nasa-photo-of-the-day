//api_key=1F5F9mMau9iKruv7BeHJOWu1C34yR20vUAbzJYiN

import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./components/CardComponent/Card";

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    for(let i = 1; i <10; i++){
      axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=1F5F9mMau9iKruv7BeHJOWu1C34yR20vUAbzJYiN&date=2012-03-${i}`
      )
      .then(res => {
        setNasaInfo(nasaInfo => [...nasaInfo, res.data]);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }

    return console.log("cleanup");
  }, []);

  return (
    <div className="App">
      {nasaInfo ? (
        nasaInfo.map(card => {
          return <Card
          image={card.url}
          // title={nasaInfo.title}
          // explanation={nasaInfo.explanation}
          // date={nasaInfo.date}
          // hdurl={nasaInfo.hdurl}
          card={card}
        />
        })
      ) : (
        "No Data"
      )}
    </div>
  );
}

export default App;
