import './App.css';
import Header from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/IntemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount';
function App() {
   return (
    <div className="App">
   <>
     <Header/>
     <ItemListContainer greeting="mi e-commerce"/>
     <ItemCount initial ={1} stock ={20} />
     
     
   </>

    </div>
  );
};
export default App;
