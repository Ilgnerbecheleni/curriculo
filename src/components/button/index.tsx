import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface ButtonProps {
    texto: string;
  }

function Button({texto}:ButtonProps) {
  return (
    <>
    <Link to={'/curriculo'} className={styles.botao}>
        {texto}
    </Link>

    </>
  )
}

export default Button
