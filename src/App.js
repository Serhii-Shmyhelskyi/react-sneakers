import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  fetch("https://63cb9e105c6f2e1d84b8d12b.mockapi.io/items").then((res) => {
    return res.json();
  }).then(json => {
    setItems(json);
  });

  return (
    <>
      <div className="wrapper clear">
        {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content">
          <div className="contentSearch">
            <h1>Всі кросівки</h1>
            <div className="contentSearchBlock">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Пошук..." type="text" />
            </div>
          </div>
          <div className="sneakersWrapper">
            {items.map((obj) => (
              <Card
                title={obj.title}
                pricer={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log('Добавили закладки')}
                onPlus={() => console.log('Нажали плюс')}
              />
            ))}
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
