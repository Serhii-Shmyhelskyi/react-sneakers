import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63cb9e105c6f2e1d84b8d12b.mockapi.io/items").then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="wrapper clear">
        {cartOpened ? <Drawer onCloseItCart={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} /> : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content">
          <div className="contentSearch">
            <h1>{searchValue ? `Пошук по запросу: "${searchValue}"` : 'Всі кросівки'}</h1>
            <div className="contentSearchBlock">
              <img src="/img/search.svg" alt="Search" />
              {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/btn-remove.svg" alt="Clear" />}
              <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder="Пошук..." type="text" />
            </div>
          </div>
          <div className="sneakersWrapper">
            {items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => (
                <Card
                  key={item.imageUrl}
                  title={item.title}
                  pricer={item.price}
                  imageUrl={item.imageUrl}
                  onFavorite={() => console.log('Добавили закладки')}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              ))}
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
