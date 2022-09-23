import * as C from './styles';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate(-1);
  };

  return (
    <>
      <C.ButtonHome onClick={handleHomeButton}>Voltar</C.ButtonHome> <br />
      <div>Erro 404</div>
    </>
  );
};

export default NotFound;
