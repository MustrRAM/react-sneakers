import Card from './components/Card';
import Header from './components/Header';
import Drawer from './Drawer';

function App() {
  return (
    <div className="wrapper clear">
       <Header />
       <Drawer />
        <div className="content p-40">
            <div className="d-flex mb-40 justify-between">
            <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="/img/search.svg"  alt="Search" />
                    <input placeholder="Поиск..." />
                </div>
            </div>
            <div className="card__wrapp">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
 
  );
}

export default App;
