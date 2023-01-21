function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Кошик <img onClick={props.onClose} className="cartItemRemoveBtn" src="/img/btn-remove.svg" alt="Close" /></h2>
                <div className="items">
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
                        </div>
                        <div className="cartItemWrapperT">
                            <p>Чоловічі кросівки Nike Air Max 270</p>
                            <b>5395 грн</b>
                        </div>
                        <img className="cartItemRemoveBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
                        </div>
                        <div className="cartItemWrapperT">
                            <p>Чоловічі кросівки Nike Air Max 270</p>
                            <b>5395 грн</b>
                        </div>
                        <img className="cartItemRemoveBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
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
        </div>
    )
}

export default Drawer;