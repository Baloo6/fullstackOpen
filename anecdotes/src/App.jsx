import { useState } from 'react'


const NextButton = (props) =>{
  return <button onClick={props.handle}>{props.text}</button>
}
const VoteButton = (props) =>{
  return <button colSpan='2' onClick={props.handle}>{props.text}</button>
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))


  function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(anecdotes.length);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleClickNext = () => {
      setSelected(getRandomInt);
  }


  const handleClickVote = () =>{
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const getMostVotedIndex = () => {
    const maxVotes = Math.max(...votes)
    return votes.indexOf(maxVotes)
  }

  return (
    <div>
      <h1>Anectodes of the day</h1>
      <strong>{anecdotes[selected]}</strong>
      <p>Has {votes[selected]} votes.</p>
      <VoteButton handle={handleClickVote} text='Vote'/>
      <NextButton handle={handleClickNext} text='Next anecdote' />
      <h1>Anecdote with most votes</h1>
      <strong>{anecdotes[getMostVotedIndex()]}</strong>
      <p>Has {votes[getMostVotedIndex()]} votes.</p>
    </div>
  )
}

export default App