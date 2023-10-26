import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home';
import Create from './create';
import Read from './read';
import Update from './update';
import Test from './test';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/read/:id' element={<Read/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/delete' element={<Test/>}></Route>
    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
