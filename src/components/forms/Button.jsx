import styles from './Button.module.css'

const Button = ({ id, p, img }) => {
  return (
    <div className={styles.Button}>
      <button id={id}>{img && <img src={img} alt={id} />}<p>{p}</p></button>
    </div>
  );
};

export default Button;
