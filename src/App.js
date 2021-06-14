import './App.css';

import Congrats from './components/congrats/congrats.components';
import GuessedWords from './components/guessed-word/guessed-word.component';
import Input from './components/input/input.component';

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = []; // [{ guessedWord: 'hello', letterMatchCount: 3 }]
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto!</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={ secretWord } />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
