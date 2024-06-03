import styles from './Card.module.css'

const Card = ({id, img, MoedaNome, MoedaValor}) => {
    return(
        <div className={styles.ContentCard}>
            <img src={img} alt={id}></img>
            <div className={styles.TextCard}>
                <p>{MoedaNome}</p>
                <p>{MoedaValor}</p>
            </div>
        </div>
    )
}

export default Card;