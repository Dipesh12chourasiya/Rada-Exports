import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './components/Header';
import AppHero from './components/hero';
import Table from './components/Table/Table';
import AppFooter from './components/footer';
import PolyesterFiber from './components/Table/PolyesterFiber';
import CottenWaste from './components/Table/CottenWaste';
import ViscossFiber from './components/Table/ViscossFiber';
import LinenFiber from './components/Table/LinenFiber';
import Yarn from './components/Yarn/CottonYarn';
import Waste from './components/Table/Waste';

function App() {
  return (
    <div className='App'>
      {/* <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
      </main>
      <Table /> */}

      <BrowserRouter>
        <header id='header'>
          <AppHeader />
        </header>
      <Routes>
        <Route path="/" element={<AppHero />}>
        </Route>
        <Route path='/raw-cotton' element={<Table />}></Route>
        <Route path='/polyster-fibre' element={<PolyesterFiber />}></Route>
        <Route path='/cotton-waste' element={<CottenWaste />}></Route>
        <Route path='/viscose-fiber' element={<ViscossFiber />}></Route>
        <Route path='/linen-fiber' element={<LinenFiber />}></Route>
        <Route path='/waste' element={<Waste />}></Route>

        <Route path='/yarn' element={<Yarn />}></Route>
      </Routes>
      <footer id='footer'>
        <AppFooter />
      </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;


// https://www.lahotioverseas.com/
// https://github.com/bibeva/React-Bootstrap-Project-Corporate/blob/master/src/components/hero.js