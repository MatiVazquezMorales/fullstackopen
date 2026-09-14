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
        {texto} {(good+neutral)/(good+neutral+bad)}
      </div>
    )
  }
  else if (texto == 'all'){
    return(
      <div>
        {texto} {good+neutral+bad}
      </div>
    )
  }
  else{
    return (
      <div>
        {texto} {(good/(good+neutral+bad)) * 100}
      </div>
    )
  }
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
      <Text texto = {texto} />     
      <Valor_boton texto = 'good' valores = {good} />
      <Valor_boton texto = 'neutral' valores = {neutral} />
      <Valor_boton texto = 'bad' valores = {bad} />
      {good +bad+neutral > 0 && (
        <div>
        <Estadisticas texto = 'all' bad={bad} neutral={neutral} good={good}/>
        <Estadisticas texto = 'average' bad={bad} neutral={neutral} good={good}/>
        <Estadisticas texto = 'positive' bad={bad} neutral={neutral} good={good}/>
        </div>
      )
      }
    </div>
  )
}

export default App