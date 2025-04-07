import logo from './logo.svg';
import './App.css';
import MemberEnroll from './component/Member-enroll';
import LightOnOff from './component/Light-on-off';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <MemberEnroll/>
      <Counter/>
      <LightOnOff/>
    </div>
  )
}

export default App;
