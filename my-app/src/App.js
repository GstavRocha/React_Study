import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import PrimeReact from 'primereact/api';

//recurso necessário para animações do riple
PrimeReact.ripple = true;
function click(){
  const teste = true;
  if(teste === true){
    console.log(teste)
  }else{
    console.log(teste,'false')
  }
}

function Button(){
  return(
    <button>TESTE</button>
  );
}

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
          Gustavo aprendendo React
        </a>
        <p className='p-text'> Teste texto</p>
        <Button label="Button" onClick={click} className="p-button-lg" />
      </header>
    </div>
  );
}

export default App;
