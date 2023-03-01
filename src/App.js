import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/NavBar/Navbar';
import { TodosProvider } from './Context/TodosContext';
import { CompletedPage } from './pages/CompletedPage/CompletedPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PendingPage } from './pages/PendingPage/PendingPage';
import { ProgresPage } from './pages/ProgresPage/ProgresPage';


function App() {
  return (
      <div className="App">
        <TodosProvider>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/pending' element={<PendingPage />}/>
              <Route path='/progress' element={<ProgresPage />}/>
              <Route path='/completed' element={<CompletedPage />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </TodosProvider>
      </div>
  );
}

export default App;
