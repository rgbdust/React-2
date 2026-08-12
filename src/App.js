
import React from "react";
import './App.css';

function App() {
  // const test = ["React", " js", " software"]
  const pets = [
    {
      name: "Dolly",
      type: "Cat",
      description: "Dolly is fun and love to be around people",
      skills: ["fetch", "play dead", "roll over"],
    },
    {
      name: "Buddy",
      type: "Dog",
      description: "Buddy is energetic and loves long walks in the park",
      skills: ["barking", "chasing balls", "shake hands"],
    },
    {
      name: "Charlie",
      type: "Parrot",
      description: "Charlie is talkative and enjoys mimicking funny sounds",
      skills: ["talking", "whistling", "flying around"],
    },
    {
      name: "Milo",
      type: "Rabbit",
      description: "Milo is quiet, fluffy, and loves eating fresh carrots",
      skills: ["hopping", "sniffing", "cuddling"],
    }
  ];
  return (
    <div>

    </div>
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
