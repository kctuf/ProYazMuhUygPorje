import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Adminpage from "./Pages/Adminpage";
import Userpage from "./Pages/Userpage";


function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/adminp" component={Adminpage} exact />
      <Route path="/userp" component={Userpage} exact />
      
    </div>
  );
}

export default App;
