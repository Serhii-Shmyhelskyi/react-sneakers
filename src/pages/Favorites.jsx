import Card from "../components/Card";
function Favorites({ items, onAddToFavorite }) {
    return (
        <div className="content">
            <div className="contentSearch">
                <h1>Мої обрані</h1>
            </div>
            <div className="sneakersWrapper">
                {items.map((item) => (
                    <Card
                        key={item.imageUrl}
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