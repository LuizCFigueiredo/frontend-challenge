import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MoedaDetalhes.module.css'
import Card from '../components/cards/Card';
import Button from '../components/forms/Button';

const MoedaDetalhes = () => {
    const { id } = useParams();
    const [moeda, setMoeda] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://192.168.0.9:3001/moedas?id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setMoeda(data[0]);
                } else {
                    setError('Moeda não encontrada');
                }
                setLoading(false);
            })
            .catch(error => {
                setError('Erro ao buscar dados');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div className={styles.ContentBdy}>
            <h1 className={styles.tittle}>Detalhamento da Moeda</h1>
            <small>veja detalhes sobre a moeda selecionada: <span className={styles.NomeMoeda}>{moeda.nome}</span></small>
            <div className={styles.ContentLine}>

            </div>
            <div className={styles.detalhesContainer}>
                <Card 
                    id={moeda.id}
                    img={moeda.img}
                    MoedaNome={moeda.nome}
                    MoedaValor={moeda.valor}
                />
                <di className={styles.detalhesContainerText}>
                    <p>nome: <span className={styles.spanContainer}>{moeda.nome}</span></p>
                    <p>cotação atual: <span className={styles.spanContainer}>R$ {moeda.valor}</span></p>
                </di>
                
            </div>
            <div className={styles.divButton}>
                <Link to='/home' className={styles.BackButton}>
                    <Button
                        id="voltar"
                        p="Voltar"
                    />
                </Link>
            </div>
            
        </div>
        
    );
};

export default MoedaDetalhes;
