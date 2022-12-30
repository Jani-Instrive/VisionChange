import logo from './logo.svg';
import './App.css';
import FrameRoot from "./Components/FrameRoot"
import Layout1 from './Components/Layout1/Layout1';
import Layout2 from './Components/Layout2/Layout2';
import Layout3 from './Components/Layout3/Layout3';
import Rough from './Components/Rough'



function App() {
  document.body.style.backgroundColor = "#f5f5f5";
  document.body.style.margin = "0";
  return (
    <div className="App">
     <Rough/>
    </div>
  );
}

export default App;

// const container1 = styled.div`

// `;