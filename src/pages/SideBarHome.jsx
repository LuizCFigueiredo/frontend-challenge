import { useState } from "react";
import styles from '../pages/SideBarHome.module.css'
import cota from '../assets/cota.png';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ShowSideBar = () => setIsOpen(!isOpen);

    return (
        <div className={isOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
            <div className={styles.ContentUp}>
                <input type="checkbox" id={styles.checkbox} onClick={ShowSideBar}/>
                <label htmlFor={styles.checkbox} className={styles.toggle}>
                    <div className={styles.bars} id={styles.bar1}></div>
                    <div className={styles.bars} id={styles.bar2}></div>
                    <div className={styles.bars} id={styles.bar3}></div>
                </label>
                <div className={styles.nameLogo}>
                    <small className={styles.nameTextSmall}>mundo</small>
                    <p className={styles.nameText}>Cripto</p>
                </div>
            </div>
            
            <div className={styles.ContentLine}>

            </div>
            <div className={styles.TabelaOp}>
                <div className={styles.contentTabela}>
                {isOpen ? (
                    <>
                        <img src={cota} alt="Cotação das Moedas" />
                        <Link to='/home' className={styles.LinkHome}><p>Cotação das Moedas</p></Link>
                    </>
                ) : (
                    <p>
                        <img src={cota} alt="Cotação das Moedas" />
                        Cotação das Moedas
                    </p>
                )}
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;