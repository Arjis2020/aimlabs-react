import MainMenu from '../MainMenu/MainMenu';
import ModalHandler from '../Modal/ModalHandler';
import Score from '../Score/Score';
import TargetContainer from '../TargetContainer/TargetContainer';
import Timer from '../Timer/Timer';
import './app.scss';
import { useApp } from './useApp';

function App() {
  useApp();
  return (
    <div className='app'>
      <div className='app__container'>
        <ModalHandler />
        {/* <div className='app__container__header'>
          <Timer />
        </div>
        <TargetContainer />
        <Score /> */}
        <MainMenu />
      </div>
    </div>
  );
}

export default App;
