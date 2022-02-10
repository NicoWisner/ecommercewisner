import './App.css';
import Header from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/IntemListContainer';

function App() {
   return (
    <div className="App">
   <>
     <Header/>
     <ItemListContainer greeting="mi e-commerce"/>
     
     
   </>
    </div>
  );
};
export default App;
