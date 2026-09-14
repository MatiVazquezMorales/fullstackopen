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

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const titulo = 'give feedback'
  const texto = 'statistics'

  return (
    <div>
      <Title title = {titulo} />
      <Button modo = {() => setGood(good+1)} texto= 'good' />
      <Button modo = {() => setNeutral(neutral+1)} texto= 'neutral' />
      <Button modo = {() => setBad(bad+1)} texto= 'bad' />
      <Valor_boton texto = 'good' valores = {good} />
      <Valor_boton texto = 'neutral' valores = {neutral} />
      <Valor_boton texto = 'bad' valores = {bad} />
      <Text texto = {texto} />     
    </div>
  )
}

export default App