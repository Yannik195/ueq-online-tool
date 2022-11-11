import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Evaluate() {
  const { id } = useParams()
  const [questionnaire, setQuestionnaire] = useState({});

  //Fetch Data 
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/api/questionnaire/${id}`)
      .then(response => response.json())
      .then(data => setQuestionnaire(data));
  }, []);


  return (
    <header className="App-header">
      <h1>Evaluate</h1>

    </header>
  );
}

