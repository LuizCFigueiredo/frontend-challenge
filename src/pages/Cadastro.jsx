import Button from "../components/forms/Button";
import Face from "../assets/face.png";
import Google from '../assets/google.png';
import styles from './Cadastro.module.css';
import Input from '../components/forms/Input';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        toast.error("Por favor, preencha o campo obrigatório.");
        return;
      }

      if (password !== confirmPassword){
        toast.error("As senhas precisam ser iguais")
        return;
      }
  
      try {
        const response = await axios.post(
          "http://localhost:3000/cadastro",
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 201) {
          toast.success("Usuário registrado com sucesso");
          setEmail("");
          setPassword("");  
          setConfirmPassword("");

          setTimeout(() => {
            navigate('/login');
        }, 2000);
        }
  
      } catch (error) {
        if (!error?.response) {
          toast.error("Erro ao acessar o servidor");
        } else if (error.response.status === 400) {
          toast.error("Email já existe");
        } else {
          toast.error("Erro desconhecido");
        }
      }
    }; 

  return (
    <main className={styles.ContainerMain}>
      <Toaster position="top-center" reverseOrder={false}/>
        <div className={styles.ContainerPai}>
            <div className={styles.Container1}>
                <p className={styles.textindex}>
                O MUNDO CRIPTO 
                <span className={styles.span}>ESPERA POR VOCÊ</span>
                </p>
            </div>
            <div className={styles.Container2}>
                <form className={styles.form} onSubmit={handleSubmit} method="post">
                    <h2>CADASTRO 👋</h2>
                    <small className={styles.smallform}>
                        controle sua carteira cripto sem <span className={styles.spanform}>burocracias</span>
                    </small>
                    <Button
                        id="google"
                        img={Google}
                        p="Me cadastrar com Google"
                    />
                    <Button
                        id="face"
                        img={Face}
                        p="Me cadastrar com Facebook"
                    />
                    <div className={styles.content}>

                    </div>
                    <small id={styles.small} className={styles.smallform}>ou preencha seus dados manualmentel</small>
                    <div className={styles.Inputs}>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            autoComplete="off"
                            value={email}
                            set={setEmail}
                        />
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            value={password}
                            set={setPassword}
                        />
                        <Input
                            label="Confirmação de senha"
                            type="password"
                            id="passwordConfirm"
                            autoComplete="off"
                            value={confirmPassword}
                            set={setConfirmPassword}
                        />
                    </div>
                    <div className={styles.buttonCadastrar}>
                        <Button
                            id="cadastrar"
                            p="Me cadastrar"
                        />
                    </div>
                    <div className={styles.buttonLogin}>
                        <Link to='/login' className={styles.Link}>
                            <Button
                                id="login"
                                p="Fazer login"
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </main>
  );
}

export default Cadastro;
