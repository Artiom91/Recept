import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { Recipe } from './pages/Recipe'

function App() {
return (
  <>
        <BrowserRouter basename='/Recept'>
      <Header />
      <main className='container content'>
        <Routes>
          <Route  path='/' Component={Home} />
          <Route  path='about' Component={About} />
          <Route  path='category/:name' Component={Category} />
          <Route  path='meal/:id' Component={Recipe} />
          <Route  Component={NotFound}/>
        </Routes>
      </main>
      <Footer />
        </BrowserRouter>

  </>
)
}

export default App;
