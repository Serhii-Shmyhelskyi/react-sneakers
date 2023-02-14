import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://5gvv2nmy7i.api.quickmocker.com/cart"),
            axios.get("https://5gvv2nmy7i.api.quickmocker.com/favorites"),
            axios.get("https://5gvv2nmy7i.api.quickmocker.com/items"),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Помилка при запиті даних ;(");
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    //запит на сервер, для корзини
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) == Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        const findItem = cartItems.find(
          (item) => Number(item.parentId) == Number(obj.id)
        );
        await axios.delete(
          `https://5gvv2nmy7i.api.quickmocker.com/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://5gvv2nmy7i.api.quickmocker.com/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId == data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Помилка при добавлянні в корзину");
      console.log(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
      axios.delete(`https://5gvv2nmy7i.api.quickmocker.com/cart/${id}`);
    } catch (error) {
      alert("Помилка при видалені з корзину");
      console.log(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    //запит на сервер, для обраного
    try {
      if (favorites.find((FavObj) => Number(FavObj.id) === Number(obj.id))) {
        axios.delete(
          `https://5gvv2nmy7i.api.quickmocker.com/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://5gvv2nmy7i.api.quickmocker.com/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не вдалось добавити в обрані");
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <>
      <AppContext.Provider
        value={{
          items,
          cartItems,
          favorites,
          isItemAdded,
          onAddToFavorite,
          onAddToCart,
          setCartOpened,
          setCartItems,
        }}>
        <div className="wrapper clear">
          <Drawer
            items={cartItems}
            onRemove={onRemoveItem}
            onClose={() => setCartOpened(false)}
            opened={cartOpened}
          />
          <Header onClickCart={() => setCartOpened(true)} />

          <Routes>
            <Route
              path=""
              element={
                <Home
                  items={items}
                  cartItems={cartItems}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToFavorite={onAddToFavorite}
                  onAddToCart={onAddToCart}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="favorites" element={<Favorites />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
