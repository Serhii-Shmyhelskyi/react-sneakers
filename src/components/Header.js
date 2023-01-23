function Header(props) {
    return (
        <>
            <header>
                <div className="headerLeft">
                    <img width={40} height={40} src="/img/logo.png" alt="Logotupe" />
                    <div>
                        <h3 className="headerLeftTexth3">React sneakers</h3>
                        <p>Магазин кросівок</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li onClick={props.onClickCart} className="headerRightLiL">
                        <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                        <span>3005 грн.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt="User" />
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;