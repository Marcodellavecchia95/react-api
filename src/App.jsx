import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const apiUrl = "https://lanciweb.github.io/demo/api/actors/";
  const femaleApiUrl = "https://lanciweb.github.io/demo/api/actresses/";
  const [actors, setActors] = useState([]);
  const [femaleActors, setFemaleActors] = useState([]);

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

  const femaleActorsFetch = () => {
    axios.get(femaleApiUrl).then((res) => {
      const mappedFemaleActors = res.data.map((femaleActor) => {
        const { id, name, birth_year, nationality, biography, awards, image } =
          femaleActor;
        return { id, name, birth_year, nationality, biography, awards, image };
      });
      setFemaleActors(mappedFemaleActors);
    });
  };

  useEffect(() => {
    actorsFetch();
    femaleActorsFetch();
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
        <h1 className="text-center my-3">Attrici</h1>
        <div className="row gap-4">
          {femaleActors.map((femaleActor) => {
            return (
              <div key={femaleActor.id} className="col">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={femaleActor.image}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{femaleActor.name}</h5>
                  <ul>
                    <li>Born in : {femaleActor.birth_year}</li>
                    <li>Nationality : {femaleActor.nationality}</li>
                    <li>Biography : {femaleActor.biography}</li>
                    <li>Awards :{femaleActor.awards}</li>
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
