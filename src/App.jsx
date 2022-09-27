
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import TituloFormulario from './components/TituloFormulario';
import "./style.css";

function App() {
  return (
    <Container>
      <TituloFormulario></TituloFormulario>
      <Formulario></Formulario>
    </Container>
  )
}

export default App;
