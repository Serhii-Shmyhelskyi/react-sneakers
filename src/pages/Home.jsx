import React from "react";
import Card from "../components/Card";


function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {

    const renderItems = () => {
        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}
            />
        ))
    }

    return (
        <div className="content">
            <div className="contentSearch">
                <h1>{searchValue ? `Пошук по запросу: "${searchValue}"` : 'Всі кросівки'}</h1>
                <div className="contentSearchBlock">
                    <img src="img/search.svg" alt="Search" />
                    {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="img/btn-remove.svg" alt="Clear" />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..." type="text" />
                </div>
            </div>
            <div className="sneakersWrapper">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home;