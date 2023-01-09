
function App() {
  return (
    <div className="wrapper clear">
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
        <h1>Всі кросівки</h1>
        <div className="sneakersWrapper">
          <div className="card">
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
