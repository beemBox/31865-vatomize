// import logo from './logo.svg'; //! lo dejo para acordarme de la configuración del tsconfig.json con el component de svg
import './App.css';
import Header from './components/Header/Header'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  //! para probar grabatar
  const user = {
    email: 'test@email.com'
  } 
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user}/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
