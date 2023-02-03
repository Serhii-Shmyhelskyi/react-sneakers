import React from "react";
import { Routes, Route, } from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      //-------------------------------запит із сервер, для корзини--------------------------------------------
      // -------------------корзина не працює, mocApi дає змогу лише для 2-х силок----------------------------- 
      const cartResponse = await axios.get('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart');

      // const favoritesResponse = await axios.get('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/favorites');

      //---------------------------------запит із сервера, для всіх карток------------------------------

      const itemsResponse = await axios.get('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      // setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    //запит на сервер, для корзини
    try {
      if (cartItems.find(item => Number(item.id) == Number(obj.id))) {
        axios.delete(`https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (error) {
      alert('Error 404')
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id))
  };

  const onAddToFavorite = async (obj) => {
    //запит на сервер, для обраного
    try {
      if (favorites.find(FavObj => Number(FavObj.id) === Number(obj.id))) {
        axios.delete(`https://63cb9e105c6f2e1d84b8d12b.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
      }
      else {
        const { data } = await axios.post('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалось добавити в обрані');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) == Number(id))
  }

  return (
    <>
      <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened }}>
        <div className="wrapper clear">
          {cartOpened ? <Drawer onCloseItCart={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} /> : null}
          <Header onClickCart={() => setCartOpened(true)} />

          <Routes>
            <Route path="/" element={<Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading} />}
            />
            <Route path="/favorites" element={
              <Favorites />}
            />
          </Routes>
        </div >
      </AppContext.Provider>
    </>
  );
}

export default App;