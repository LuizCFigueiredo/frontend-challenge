import styles from './Home.module.css';
import Input from '../components/forms/Input';
import Lupa from '../assets/lupa.svg';
import Card from '../components/cards/Card';
import Bit from '../assets/Bitcoin.png';

function Home() {
    return(
        <div className={styles.contentBody}>
            <h1 className={styles.tittle}>Lista de Moedas</h1>
            <small className={styles.Frase}>veja todas as moedas cadastrada em nossa
            <span className={styles.SpanFrase}> plataforma</span>
            </small>
            <div className={styles.LineContent}>

            </div>
            <div className={styles.InputButton}>
                <Input
                    label="filtrar por:"
                    type="text"
                    id={styles.filtro}
                    autoComplete="off"
                />
                <button className={styles.ButtonInput}><img src={Lupa} alt="filter"/></button>
            </div>
            <div className={styles.ContainerCards}>
                {/*<Card 
                    id="bitcoin"
                    img={Bit}
                    MoedaNome="Bitcoin"
                    MoedaValor="R$ 305.140,00"
                />*/}
                
            </div>
        </div>
    )
}

export default Home;