import React from "react";
import axios from "axios";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63eb32f5f1a969340db31aab.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Помилка при запросі замовлення");
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="contentSearch">
        <h1>Мої замовлення</h1>
      </div>
      <div className="sneakersWrapper">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
