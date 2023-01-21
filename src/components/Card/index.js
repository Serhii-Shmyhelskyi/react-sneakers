import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClicPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardFavorite} onClick={props.onFavorite}>
                    <img src="/img/heart-unliked.svg" alt="Unliked" />
                </div>
                <img weight={133} height={112} src={props.imageUrl} alt="Sneakers" />
                <h5>{props.title}</h5>
                <div className={styles.cardBottom}>
                    <div className={styles.cardBottomCard}>
                        <span>Ціна:</span>
                        <b>{props.pricer} грн</b>
                    </div>
                    <img className={styles.plus} onClick={onClicPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
                </div>
            </div>
        </>
    )
}

export default Card;