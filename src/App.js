import { MathJaxContext } from 'better-react-mathjax';
import './App.css';
import { Multiply } from './quizzes/Multiply';

function App() {
  return (
    <div className="App">
      <MathJaxContext>
        <Multiply />
      </MathJaxContext>
    </div>
  );
}

export default App;
