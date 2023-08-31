import './App.css';
import Banking from './sections/Banking';
import Cash from './sections/Cash';
import Home from './sections/Home';
import Investing from './sections/Investing';
import Payment from './sections/Payment';

function App() {
  return (
    <div>
      <Home/>
      <Payment/>
      <Banking/>
      <Cash/>
      <Investing/>
    </div>
  );
}

export default App;
