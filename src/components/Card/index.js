import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import styles from './Card.module.scss';

function Card({ id, title, price, imageUrl, onFavorite, onPlus, favorited = false, loading = false }) {
    const { isItemAdded } = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = { id, title, imageUrl, price };

    const onClicPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {loading ?
                <ContentLoader
                    speed={0}
                    width={150}
                    height={200}
                    viewBox="0 0 150 200"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="100" />
                    <rect x="0" y="112" rx="10" ry="10" width="150" height="15" />
                    <rect x="0" y="131" rx="10" ry="10" width="100" height="15" />
                    <rect x="0" y="158" rx="10" ry="10" width="80" height="25" />
                    <rect x="119" y="153" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                :
                <>
                    <div className={styles.cardFavorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
                    </div>
                    <img weight={133} height={112} src={imageUrl} alt="Sneakers" />
                    <h5>{title}</h5>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardBottomCard}>
                            <span>Ціна:</span>
                            <b>{price} грн</b>
                        </div>
                        <img className={styles.plus} onClick={onClicPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
                    </div>
                </>}
        </div>
    )
}

export default Card;