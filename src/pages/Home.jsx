import Card from "../components/Card";

function Home({ items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart }) {
    return (
        <div className="content">
            <div className="contentSearch">
                <h1>{searchValue ? `Пошук по запросу: "${searchValue}"` : 'Всі кросівки'}</h1>
                <div className="contentSearchBlock">
                    <img src="/img/search.svg" alt="Search" />
                    {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/btn-remove.svg" alt="Clear" />}
                    <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder="Пошук..." type="text" />
                </div>
            </div>
            <div className="sneakersWrapper">
                {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                    <Card
                        key={item.imageUrl}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;