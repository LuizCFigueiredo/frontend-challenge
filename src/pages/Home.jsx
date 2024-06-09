import styles from './Home.module.css';
import Input from '../components/forms/Input';
import Lupa from '../assets/lupa.svg';
import Card from '../components/cards/Card';
import { useState, useEffect } from 'react';

function Home() {

    const [filtroInput, setFiltroInput] = useState("");
    const [moedas, setMoedas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://192.168.0.9:3001/moedas')
            .then(response => response.json())
            .then(data => {
                setMoedas(data);
                setLoading(false);
            })
            .catch(error => {
                setError('Erro ao buscar dados');
                setLoading(false);
            });
    }, []);

    const moedasFiltradas = moedas.filter(moeda =>
        moeda.nome.toLowerCase().includes(filtroInput.toLowerCase())
    );

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                    set={setFiltroInput}
                />
                <button className={styles.ButtonInput}><img src={Lupa} alt="filter"/></button>
            </div>
            <div className={styles.ContainerCards}>
                {moedasFiltradas.map((moeda) => (
                    <Card
                        key={moeda.id}
                        id={moeda.id}
                        img={moeda.img}
                        MoedaNome={moeda.nome}
                        MoedaValor={moeda.valor}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;