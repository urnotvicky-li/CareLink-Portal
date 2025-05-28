import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BPChart from './components/BPChart';
import MedicationList from './components/MedicationList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <BPChart />
        <MedicationList />
        {/* <h1>Hello from Main Area</h1> */}
      </div>
    </div>
  );
}

export default App;