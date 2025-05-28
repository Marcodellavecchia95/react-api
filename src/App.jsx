import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const apiUrl = "https://lanciweb.github.io/demo/api/actors/";
  const [actors, setActors] = useState([]);

  const actorsFetch = () => {
    axios.get(apiUrl).then((res) => {
      const mappedActors = res.data.map((actor) => {
        const { id, name, birth_year, nationality, biography, awards, image } =
          actor;
        return { id, name, birth_year, nationality, biography, awards, image };
      });
      setActors(mappedActors);
    });
  };

  useEffect(() => {
    actorsFetch();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">Attori</h1>
        <div className="row gap-4">
          {actors.map((actor) => {
            return (
              <div key={actor.id} className="col">
                <div className="card">
                  <img className="card-img-top" src={actor.image} alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{actor.name}</h5>
                  <ul>
                    <li>Born in : {actor.birth_year}</li>
                    <li>Nationality : {actor.nationality}</li>
                    <li>Biography : {actor.biography}</li>
                    <li>
                      Awards :{" "}
                      <ul>
                        {actor.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
