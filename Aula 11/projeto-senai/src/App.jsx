
import './App.css'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Sidebar from './componentes/Sidebar';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './componentes/Dashboard';
import Relatorios from './componentes/Relatorios';
import Perfil from './componentes/Perfil';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className='contentor'>
      <BrowserRouter>

        <Header onToggleMenu={() => setSidebarOpen(v => !v)} />
        <div className='fundo'>
          <Sidebar isOpen={isSidebarOpen}
            closeSidebar={closeSidebar} />
            <main className='page-body'>
            <Routes>
              <Route path='/' element= {<Dashboard />}/>
              <Route path='/relatorios' element= {<Relatorios />}/>
              <Route path='/perfil' element= {<Perfil />}/>
            </Routes>
            </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
