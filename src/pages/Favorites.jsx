import React from "react";
import AppContext from "../context";
import Card from "../components/Card";

function Favorites() {

    const { favorites, onAddToFavorite } = React.useContext(AppContext)

    return (
        <div className="content">
            <div className="contentSearch">
                <h1>Мої обрані</h1>
            </div>
            <div className="sneakersWrapper">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;