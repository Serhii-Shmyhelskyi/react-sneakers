import Info from "./Info";

function Drawer({ onClose, items = [], onCloseItCart }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Кошик <img onClick={onClose} className="cartItemRemoveBtn" src="/img/btn-remove.svg" alt="Close" /></h2>
                {
                    items.length > 0 ?
                        <div className="wrapperItems">
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">
                                        </div>
                                        <div className="cartItemWrapperT">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} грн</b>
                                        </div>
                                        <img onClick={() => onCloseItCart(obj.id)} className="cartItemRemoveBtn" src="/img/btn-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="itemsWrapperPrice">
                                <ul>
                                    <li>
                                        <span>Всього</span>
                                        <div></div>
                                        <b>10790 грн</b>
                                    </li>
                                    <li>
                                        <span>Податок 5%:</span>
                                        <div></div>
                                        <b>1079 грн</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" /> </button>
                            </div>
                        </div>
                        : (
                            <Info title='Корзина пуста' description='Добавте хоча б одну пару кросівок, щоб зробити замовлення' image='/img/empty-cart.jpg' />
                        )
                }
            </div>
        </div>
    )
}

export default Drawer;