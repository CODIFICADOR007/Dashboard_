import Table from './component/Table/Table.jsx'
import "./App.css";
import Rev from "./component/Graph/Rev";
import Vis from "./component/Graph/Vis";
import Sidebar from "./component/Sidebar";
import Third from "./component/Third/Third";
import Maindash from "./component/maindash/Maindash";
import Nav from "./component/maindash/Nav";

function App() {
  return (
    <div className="App">
      <div className="Appglass">
        <Sidebar></Sidebar>
        <div className="roww">
          <Maindash></Maindash>
          
   
          
         
          
        </div>
      </div>
    </div>
  );
}

export default App;
