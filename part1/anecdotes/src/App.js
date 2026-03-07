import { useState } from 'react'

  const Button = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)

const MostVoted = ({list, votes}) => {
const maxNumberPosition = votes.indexOf(Math.max(...votes));

return (
  <div>
  <p>{list[maxNumberPosition]}</p>
  <p>has {votes[maxNumberPosition]} votes</p>
 </div>
)

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  
  //let randomNumber = Math.floor(Math.random() * (anecdotes.length-1)); 
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const handleCliqueVote = () => {

    const copy = [...votes]
    // increment the value in position 2 by one
    copy[selected] += 1     
    setVotes(copy);
    
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClique={handleCliqueVote} texto="vote"></Button>
      <Button handleClique={() => setSelected(Math.floor(Math.random() * (anecdotes.length)))} texto="next anecdote"></Button>
      <h1>Anecdote with most votes</h1>
      <MostVoted list={anecdotes} votes={votes}></MostVoted>
    </div>
  )
}

export default App