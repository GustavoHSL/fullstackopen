import { useState } from 'react'

  // não defina um componente dentro de outro componente
  const Statistics = ({good, neutral, bad}) => {
    let all = good+neutral+bad;
    let average = good + (bad*-1);
    let positive = good/all;
    if(all === 0){
      return(
        <div>No feedback given</div>
      )
    }else{
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={all}></StatisticLine>
        <StatisticLine text="average" value={average}></StatisticLine>
        <StatisticLine text="positive" value={positive*100}></StatisticLine>
        </tbody>
      </table>
    </div>
  )
    }

  }
  const StatisticLine = ({text, value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }

  const Button = ({ handleClique, texto }) => (
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
      <Button handleClique={() => setGood(good + 1)} texto="good"></Button>
      <Button handleClique={() => setNeutral(neutral+1)} texto="neutral"></Button>
      <Button handleClique={() => setBad(bad+1)} texto="bad"></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
}


export default App;
