import { useState } from 'react'



const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)



const App = () => {
  const [valor, setValor] = useState(10)
  
  const setNoValor = (novoValor) => {
    console.log('setValor atual', novoValor)
    setValor(novoValor)
  }

  const Exibir = props => <div>{props.valor}</div>

  return (
    <div>
      <Exibir valor={valor} />
      <Botao handleClique={() => setNoValor(1000)} texto="mil" />
      <Botao handleClique={() => setNoValor(0)} texto="zerar" />
      <Botao handleClique={() => setNoValor(valor + 1)} texto="incrementar" />
    </div>
  )
}

export default App