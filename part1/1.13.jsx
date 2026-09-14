import {useState} from 'react'

const Button = ({modo, texto}) => (
  <button onClick = {modo}>
    {texto}
  </button>
)

const Title = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Text = ({texto}) => {
  return(
    <div>
      <p>{texto}</p>
    </div>
  )
}

const Valor_boton = ({texto, valores}) => {
  return(
    <div>
      {texto} {valores}
    </div>
  )
}

const Estadisticas = ({texto, bad, neutral, good}) => {
  if(texto == 'average'){
    return(
      <div>
        <tr>
          <td>{texto}</td>
          <td>{(good+neutral)/(good+neutral+bad)}</td>
        </tr>
      </div>
    )
  }
  else if (texto == 'all'){
    return(
      <div>
        <tr>
          <td>{texto}</td>
          <td>{good+neutral+bad}</td>
        </tr>
      </div>
    )
  }
  else{
    return (
      <div>
        <tr>
          <td>{texto}</td>
          <td>{(good/(good+neutral+bad)) * 100}</td>
        </tr>
      </div>
    )
  }
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

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    setSelected((selected + 1) % anecdotes.length)
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return(
    <div>
      <Text texto={anecdotes[selected]} />
      <Button modo={handleNext} texto='next anecdotes'/>
      <Text texto={'cantidad de votos: '+ votes[selected]} />
      <Button modo={handleVotes} texto='Votar'/>
    </div>
  )
}

export default App