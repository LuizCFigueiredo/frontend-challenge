import Button from "../components/forms/Button";
import Face from "../assets/face.png";
import Google from '../assets/google.png';
import styles from './Login.module.css';
import Input from '../components/forms/Input';
import React, { useState } from "react";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
        toast.error("Por favor, preencha o campo obrigatório.");
        return;
        }

        try {
            setLoading(true);
            const response = await axios.post(
                "http://localhost:3000/login",
                { email, password },
                {   
                headers: { "Content-Type": "application/json" },
                }
            );

            if (response.status === 200) {
                toast.success("Login successful");
                login(response.data);
                

                setTimeout(() => {
                    navigate('/home');
                }, 2500);
            }
            
            } catch (error) {
            if (!error?.response) {
                toast.error("Erro ao acessar o servidor");
            } else if (error.response.status === 401) {
                toast.error("Usuário ou senha inválidos");
            } else {
                toast.error("Erro desconhecido");
            }
        }
        setLoading(false);
}
    return (
        <main className={styles.containerMain}>
            <Toaster position="top-center" reverseOrder={false}/>
            <div className={styles.containerPai}>
                <div className={styles.containerLogin1}>
                    <p className={styles.textIndex}>
                    O MUNDO CRIPTO 
                    <span className={styles.span}>ESPERA POR VOCÊ</span>
                    </p>
                </div>
                <div className={styles.containerLogin2}>
                    <form className={styles.formLogin} onSubmit={handleSubmit} method="post">
                        <h2>Login 👋</h2>
                        <small className={styles.smallFormLogin}>
                            controle sua carteira cripto sem <span className={styles.spanFormLogin}>burocracias</span>
                        </small>
                        <Button
                            id="google"
                            img={Google}
                            p="Entre com Google"
                        />
                        <Button
                            id="face"
                            img={Face}
                            p="Entre com Facebook"
                        />
                        <div className={styles.content}>

                        </div>
                        <small id={styles.small} className={styles.smallForm}>ou entre com um email</small>
                        <div className={styles.Inputs}>
                            <Input
                                label="Email"
                                type="email"
                                id="email"
                                autoComplete="off"
                                set={setEmail}
                            />
                            <Input
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="off"
                                set={setPassword}
                            />
                        </div>
                        
                        <Link to='/forgetPassword' className={styles.LinkCadastro}>
                            <small className={styles.contentText}>esqueceu sua senha?</small>
                        </Link>
                        <div className={styles.buttonCadastrar}>
                            <Button
                                id="login"
                                p={loading ? "Carregando..." : "Login"}
                                onClick={handleSubmit}
                            />
                        </div>
                        <div className={styles.buttonLogin}>
                            <Link to='/cadastro' className={styles.LinkCadastro}>
                                <Button
                                    id="cadastrar"
                                    p="Não tenho cadastro"
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;