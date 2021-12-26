import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div style={app}>
      <Card />
    </div>
  );
}

const app = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center'
}
export default App;
