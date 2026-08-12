
import './App.css';

function App() {
  const test = ["React", " js", " software"]
  return (

    <div className="App">
      <h1>You know what</h1>
      <p>I love {test}</p>
      <h1>{String(true)}</h1>
      {
        test.map(value => <h1 key={test}>{value}</h1>)
        // Map is used instead of loops in JSX. 
      }

      {2 > 3 ? <h6>Such too much</h6> : <h6>kabhi kabhi chup rehna hee behtr hai</h6>}
    </div>
  );
}

export default App;
