import styles from './Input.module.css'

const Input = ({ label, type, id, placeholder, value, autoComplete, set }) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={({ target }) => set(target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
