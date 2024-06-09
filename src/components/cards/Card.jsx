import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom';

const Card = ({id, img, MoedaNome, MoedaValor}) => {
    const location = useLocation();
    const isDetailPage = location.pathname.startsWith('/moeda/');

    const cardContent = (
        <div className={styles.ContentCard}>
            <img src={img} alt={id}></img>
            <div className={styles.TextCard}>
                <p className={styles.MoedaNome}>{MoedaNome}</p>
                <p className={styles.MoedaValor}>R$ {MoedaValor}</p>
            </div>
        </div>
    );
    
    return isDetailPage ? (
        <div className={styles.cardLink}>{cardContent}</div>
    ) : (
        <Link to={`/moeda/${id}`} className={styles.cardLink}>
            {cardContent}
        </Link>
    );
}

export default Card;