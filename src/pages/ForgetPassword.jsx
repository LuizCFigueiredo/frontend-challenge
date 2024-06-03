import styles from './ForgetPassword.module.css';
import Button from '../components/forms/Button';
import Input from '../components/forms/Input';
import {Link} from 'react-router-dom';

function ForgetPassword(){
    return(
        <main className={styles.containerMain}>
            <div className={styles.containerPai}>
                <div className={styles.containerLogin1}>
                    <p className={styles.textIndex}>
                    O MUNDO CRIPTO 
                    <span className={styles.span}>ESPERA POR VOCÊ</span>
                    </p>
                </div>
                <div className={styles.containerLogin2}>
                    <form className={styles.formLogin} method="post">
                        <h2>Esqueceu sua senha?</h2>
                        <small className={styles.smallFormLogin}>
                            não se preocupe, nós <span className={styles.spanFormLogin}>recuperamos</span> pra você 
                        </small>
                        <small id={styles.small} className={styles.smallForm}>ou entre com um email</small>
                        <div className={styles.Inputs}>
                            <Input
                                label="Email"
                                type="email"
                                id="email"
                                autoComplete="off"
                            />
                        </div>

                        <div className={styles.buttonCadastrar}>
                            <Button
                                id="cadastrar"
                                p="enviar recuperação de senha"
                            />
                        </div>
                        <div className={styles.buttonLogin}>
                            <Link to='/login' className={styles.LinkCadastro}>
                                <Button
                                    id="login"
                                    p="voltar para o login"
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default ForgetPassword;