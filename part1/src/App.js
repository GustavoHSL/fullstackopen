/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

const Hello = (props) => {
  console.log(props)
  return (
    <div>
    <p>Olá {props.nome}, você tem {props.idade} anos</p>
    </div>
  )
}

const App = () => {
const amigos = ['Peter', 'Maya']

  return (
  <div>
    <p> {amigos} </p> 
  </div>)
}


export default App