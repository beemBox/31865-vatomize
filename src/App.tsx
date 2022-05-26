// import logo from './logo.svg'; //! lo dejo para acordarme de la configuración del tsconfig.json con el component de svg
import './App.css';
import Header from './components/organisms/Header/Header'
import ItemListContainer from './components/container/ItemListContainer'

function App() {
  //! para probar grabatar
  const user = {
    email: 'test@email.com'
  } 
  return (
    <div className="App">
      <Header user={user}/>
      <ItemListContainer msg="Mensaje en pantalla." />
    </div>
  );
}

export default App;
