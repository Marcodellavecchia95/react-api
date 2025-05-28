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
                  <h5 className="card-title my-2">{actor.name}</h5>
                  <ul>
                    <li>
                      <strong>Born in </strong>:{actor.birth_year}
                    </li>
                    <li>
                      <strong>Nationality</strong> : {actor.nationality}
                    </li>
                    <li>
                      <strong>Biography</strong> : {actor.biography}
                    </li>
                    <li>
                      <strong>Awards</strong> :{" "}
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
                  <h5 className="card-title my-2">{femaleActor.name}</h5>
                  <ul>
                    <li>
                      <strong>Born in </strong>: {femaleActor.birth_year}
                    </li>
                    <li>
                      <strong>Nationality</strong> : {femaleActor.nationality}
                    </li>
                    <li>
                      <strong>Biography</strong> : {femaleActor.biography}
                    </li>
                    <li>
                      <strong>Awards </strong>:{femaleActor.awards}
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
