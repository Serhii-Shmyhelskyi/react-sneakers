import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './hooks/useCart';

function Header(props) {

    const { totalPrice } = useCart();

    return (
        <>
            <header>
                <Link to="/">
                    <div className="headerLeft">
                        <img width={40} height={40} src="/img/logo.png" alt="Logotupe" />
                        <div>
                            <h3 className="headerLeftTexth3">React sneakers</h3>
                            <p>Магазин кросівок</p>
                        </div>

                    </div>
                </Link>
                <ul className="headerRight">
                    <li onClick={props.onClickCart} className="headerRightLiL">
                        <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                        <span>{totalPrice} грн.</span>
                    </li>
                    <li className="headerRightHeart">
                        <Link to="/favorites">
                            <img width={18} height={18} src="/img/heart.svg" alt="Heart" />
                        </Link>
                        <Link to="/orders">
                            <img width={18} height={18} src="/img/user.svg" alt="User" />
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;