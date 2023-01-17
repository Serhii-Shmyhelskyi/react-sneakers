import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { title: 'Чоловічі кросівки Nike Blazer Mid Suede', price: 5395, imageUrl: '/img/sneakers/1.jpg' },
  { title: 'Чоловічі кросівки Nike Air max 270', price: 4999, imageUrl: '/img/sneakers/2.jpg' },
  { title: 'Чоловічі кросівки Nike Zoom max 270', price: 5999, imageUrl: '/img/sneakers/3.jpg' },
  { title: 'Чоловічі кросівки Nike Forse max 270', price: 8000, imageUrl: '/img/sneakers/4.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentSearch">
          <h1>Всі кросівки</h1>
          <div className="contentSearchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." type="text" />
          </div>
        </div>
        <div className="sneakersWrapper">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              pricer={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj.price)}
            />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
