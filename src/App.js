import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {

  let imgUrl = "https://static.tildacdn.com/tild3565-3139-4331-b366-666635393866/1645202220_33-kartin.png";

  let menu = [
    {
        name: "Сырники",
        ingredients: ["творог", "мука", "яйцо"],                           
        price: 90
    },

    {
        name: "Карбонара",
        ingredients: ["паста", "бекон", "сливки", "сыр"],                         
        price: 320
    },

    {
        name: "Тосты с бананом",
        ingredients: ["тост", "Нутелла", "банан"],                 
        price: 55
    }

  ]

  return (
    <div className="App">
      <header className="App-header">

        {menu.map((item) => (
          <Menu name={item.name} price={item.price}/>
        ))}

        <img src={imgUrl} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
