import React from 'react';
import styles from './Card.module.scss';

function Card({ id, title, price, imageUrl, onFavorite, onPlus, favorited }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = { id, title, imageUrl, price };

    const onClicPlus = () => {
        onPlus(obj);
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
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
                <img className={styles.plus} onClick={onClicPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    )
}

export default Card;