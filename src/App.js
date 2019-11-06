//api_key=1F5F9mMau9iKruv7BeHJOWu1C34yR20vUAbzJYiN

import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import { Card } from './components/Card';

function App() {

const [state, setState] = useState({});

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=1F5F9mMau9iKruv7BeHJOWu1C34yR20vUAbzJYiN')
      .then((res) =>{
        setState(res.data);
        console.log(res.data);
      })
      .catch(err =>{
        console.log(err);
      })

      return console.log('cleanup')

  }, []);

  return (
    <div className="App">
        <Card image={state.url} title={state.title}/>
    </div>
  );
}

export default App;
