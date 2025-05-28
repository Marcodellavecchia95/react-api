import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const apiUrl = "https://lanciweb.github.io/demo/api/actors/";

  const actorsFetch = () => {
    axios.get(apiUrl).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    actorsFetch;
  }, []);

  return console.log(actorsFetch());
}
