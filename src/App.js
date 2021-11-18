import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AddExpense from './Pages/AddExpense/AddExpense';
import ThemePage from './Pages/ThemePage/ThemePage';
import SwitchAppContext from './Utils/Context/SwitchAppContext';
import DataContext from './Utils/Context/DataContext';



function App() {
  return (
      <SwitchAppContext>
    <DataContext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="addExpense" element={<AddExpense />}/>
            <Route path="theme" element={<ThemePage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </DataContext>
      </SwitchAppContext>
  );
}

export default App;
