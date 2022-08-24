import './App.css';
import CounterApp from './CounterApp';

function App({value}) {
 
  return (
    <CounterApp props={value=1}/>
  );
}

export default App;
