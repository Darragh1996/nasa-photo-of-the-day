//api_key=1F5F9mMau9iKruv7BeHJOWu1C34yR20vUAbzJYiN

import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./components/Card";

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1F5F9mMau9iKruv7BeHJOWu1C34yR20vUAbzJYiN"
      )
      .then(res => {
        setNasaInfo(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    return console.log("cleanup");
  }, []);

  return (
    <div className="App">
      {nasaInfo ? (
        <Card
          image={nasaInfo.url}
          title={nasaInfo.title}
          explanation={nasaInfo.explanation}
          date={nasaInfo.date}
          hdurl={nasaInfo.hdurl}
        />
      ) : (
        "No Data"
      )}
    </div>
  );
}

export default App;
