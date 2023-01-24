import React from 'react';
import styles from './Card.module.scss';

function Card({ title, pricer, imageUrl, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const obj = { title, imageUrl, pricer };

    const onClicPlus = () => {
        onPlus(obj);
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardFavorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img weight={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardBottomCard}>
                    <span>Ціна:</span>
                    <b>{pricer} грн</b>
                </div>
                <img className={styles.plus} onClick={onClicPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    )
}

export default Card;