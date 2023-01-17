import styles from './Card.module.scss';

function Card(props) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardFavorite}>
                    <img src="/img/heart-unliked.svg" alt="Unliked" />
                </div>
                <img weight={133} height={112} src={props.imageUrl} alt="Sneakers" />
                <h5>{props.title}</h5>
                <div className={styles.cardBottom}>
                    <div className={styles.cardBottomCard}>
                        <span>Ціна:</span>
                        <b>{props.pricer} грн</b>
                    </div>
                    <button className={styles.button} onClick={props.onClick}>
                        <img weight={11} height={11} src="/img/plus.svg" alt="Plus" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;