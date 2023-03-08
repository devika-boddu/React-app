import logo from './logo.svg';
import Fetchdata from './data_fetch/Fetchdata'
import './App.css';
import FetchDataFunc from './data_fetch/FetchDataFunc';

function App() {
  return (
    <div className="App">
       {/* <Fetchdata></Fetchdata> */}
       <FetchDataFunc></FetchDataFunc>
    </div>
  );
}

export default App;
