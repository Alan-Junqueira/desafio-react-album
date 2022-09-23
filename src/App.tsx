import Routes from './Routes';
import * as C from './App.Styles';

function App() {
  return (
    <>
      <C.Header>
        <h1>Galeria de Fotos</h1>
      </C.Header>

      <C.Container>
        <Routes />
      </C.Container>
    </>
  );
}

export default App;
