import image from '../../assets/logo.png'
import styles from './styles.module.css';
function Banner() {
  return (
    <div>
      <img src={image} alt="" className={styles.logo}/>
    </div>
  )
}

export default Banner
