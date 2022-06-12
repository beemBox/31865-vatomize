// import logo from './logo.svg'; //! lo dejo para acordarme de la configuración del tsconfig.json con el component de svg
import './App.css';
import Header from './components/Header/Header'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'

function App() {
  //! para probar grabatar
  const user = {
    email: 'test@email.com'
  } 
  return (
    <div className="App">
      <Header user={user}/>
      <ItemDetailContainer/>
      <ItemListContainer category="juice" heading="New Juices" />
    </div>
  );
}

export default App;
