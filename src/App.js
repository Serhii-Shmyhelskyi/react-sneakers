import React from "react";
import { Route } from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setSavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    //запит із сервера, для всіх карток
    axios.get('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    //запит із сервер, для корзини
    axios.get('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    //запит на сервер, для корзини
    axios.post('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id))
  };

  const onAddToFavorite = (obj) => {
    //запит на сервер, для обраного
    axios.post('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/favorites', obj);
    setSavorites(prev => [...prev, obj]);
  };

  return (
    <>
      <div className="wrapper clear">
        {cartOpened ? <Drawer onCloseItCart={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} /> : null}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home />
        </Route>

      </div >
    </>
  );
}

export default App;
