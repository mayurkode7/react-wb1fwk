import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    axios
      .get('https://api.quotable.io/random') // http://localhost:8000/quotes
      .then(response => {
        setQuotes(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        console.log('clean up');
      });
  }, []);

  return (
    <main>
      <h1>JSON Server & axios</h1>
      <p>json-server to create fake rest API</p>
      <p>axios to make request</p>
      <p>
        npm run server for running server on 8000. Do it on different terminal
      </p>
      <blockquote>{quotes.content}</blockquote>
    </main>
  );
}
