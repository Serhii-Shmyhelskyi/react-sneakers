import React from "react";
import axios from "axios";

import Info from "../Info";
import { useCart } from "../hooks/useCart";

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const { orderId, setOrderId } = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const rounded = function (number) {
        return +number.toFixed(2);
    }

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/orders', { items: cartItems });

            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([])
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://63cb9e105c6f2e1d84b8d12b.mockapi.io/cart' + item.id);
                await delay(1000);
            }

        } catch (error) {
            alert('Помилка при створені замовлення :(')
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2>Кошик <img onClick={onClose} className="cartItemRemoveBtn" src="img/btn-remove.svg" alt="Close" /></h2>
                {
                    items.length > 0 ?
                        <div className="wrapperItems">
                            <div className={styles.items}>
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">
                                        </div>
                                        <div className="cartItemWrapperT">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} грн</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="cartItemRemoveBtn" src="img/btn-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="itemsWrapperPrice">
                                <ul>
                                    <li>
                                        <span>Всього</span>
                                        <div></div>
                                        <b>{totalPrice} грн</b>
                                    </li>
                                    <li>
                                        <span>Податок 5%:</span>
                                        <div></div>
                                        <b>{rounded(totalPrice * 0.05)} грн</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформити замовлення <img src="img/arrow.svg" alt="Arrow" /> </button>
                            </div>
                        </div>
                        : (
                            <Info title={isOrderComplete ? 'Замовлення оформленне' : 'Корзина пуста'} description={isOrderComplete ? `Ваше замовлення № ${orderId} скоро буде передано в службу доставки` : 'Добавте хоча б одну пару кросівок, щоб зробити замовлення'} image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'} />
                        )
                }
            </div>
        </div>
    )
}

export default Drawer;