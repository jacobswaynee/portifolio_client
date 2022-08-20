import './App.css';
import Portfolio from './pages/index';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Deploying the new changes to the mike.code-kings.org
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Portfolio/>
    </div>
  );
}
export default App;
