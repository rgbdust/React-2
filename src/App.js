
import React from "react";
import './App.css';
import { Tag } from 'antd';

function App() {
  // const test = ["React", " js", " software"]
  const pets = [
    {
      name: "Dolly",
      type: "Cat",
      description: "Dolly is fun and love to be around people",
      skills: ["fetch", "play dead", "roll over"],
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Buddy",
      type: "Dog",
      description: "Buddy is energetic and loves long walks in the park",
      skills: ["barking", "chasing balls", "shake hands"],
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Charlie",
      type: "Parrot",
      description: "Charlie is talkative and enjoys mimicking funny sounds",
      skills: ["talking", "whistling", "flying around"],
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      name: "Milo",
      type: "Rabbit",
      description: "Milo is quiet, fluffy, and loves eating fresh carrots",
      skills: ["hopping", "sniffing", "cuddling"],
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&h=600&q=80",
    }


  ];
  return (
    <div className="App">
      <h1 className="my-pets-heading">My Pets</h1>
      <ul className="container">
        {pets.map((pet, index) => (
          <li key={index}>
            <h1>{pet.name}</h1>
            <img className="pet-image" src={pet.image} alt={pet.name} />
            <p>{pet.description}</p>
            <ul className="skills">

              {pet.skills.map((skill, index) => <Tag key={index} color="cyan">
                {skill}
              </Tag>)}

            </ul>
          </li>
        ))}
      </ul>
    </div >
    // <div className="App">
    //   <h1>You know what</h1>
    //   <p>I love {test}</p>
    //   <h1>{String(true)}</h1>
    //   {
    //     test.map(value => <h1 key={test}>{value}</h1>)
    //     // Map is used instead of loops in JSX. 
    //   }

    //   {2 > 3 ? <h6>Such too much</h6> : <h6>kabhi kabhi chup rehna hee behtr hai</h6>}
    // </div>
  );
}

export default App;
