import { useState } from 'react'

  // não defina um componente dentro de outro componente
  const Statistics = ({good, neutral, bad}) => {
    let all = good+neutral+bad;
    let average = good + (bad*-1);
    let positive = good/all;
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive*100}%</p>
    </div>
  )
  }

  const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



/*
  const handleCliqueGood = () => {
   // setTodos(todosOsCliques.concat('E'))
    setGood(good + 1)
  }
  
    const handleCliqueNeutral = () => {
   // setTodos(todosOsCliques.concat('E'))
    setNeutral(neutral + 1)
  }

      const handleCliqueBad = () => {
   // setTodos(todosOsCliques.concat('E'))
    setNeutral(neutral + 1)
  }*/


  return (
    <div>
      <h1>give feedback</h1>
      <Botao handleClique={() => setGood(good + 1)} texto="good"></Botao>
      <Botao handleClique={() => setNeutral(neutral+1)} texto="neutral"></Botao>
      <Botao handleClique={() => setBad(bad+1)} texto="bad"></Botao>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
}


export default App;
