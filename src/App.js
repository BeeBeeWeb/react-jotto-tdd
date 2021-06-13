import './App.css';

import Congrats from './components/congrats/congrats.components';
import GuessedWords from './components/guessed-word/guessed-word.component';

function App() {
  return (
    <div className="container">
      <h1>Jotto!</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'hello', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
