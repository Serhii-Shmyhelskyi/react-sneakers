
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">

          <h2>Кошик <img className="cartItemRemoveBtn" src="/img/btn-remove.svg" alt="Remove" /></h2>

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

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="headerLeftTexth3">React sneakers</h3>
            <p>Магазин кросівок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="headerRightLiL">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>3005 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="contentSearch">
          <h1>Всі кросівки</h1>
          <div className="contentSearchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." type="text" />
          </div>
        </div>
        <div className="sneakersWrapper">
          <div className="card">
            <div className="cardFavorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img weight={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className='cardBottom'>
              <div className='cardBottomCard'>
                <span>Ціна:</span>
                <b>5395 грн</b>
              </div>
              <button className='button'>
                <img weight={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img weight={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className='cardBottom'>
              <div className='cardBottomCard'>
                <span>Ціна:</span>
                <b>5395 грн</b>
              </div>
              <button className='button'>
                <img weight={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img weight={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className='cardBottom'>
              <div className='cardBottomCard'>
                <span>Ціна:</span>
                <b>5395 грн</b>
              </div>
              <button className='button'>
                <img weight={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img weight={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className='cardBottom'>
              <div className='cardBottomCard'>
                <span>Ціна:</span>
                <b>5395 грн</b>
              </div>
              <button className='button'>
                <img weight={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
