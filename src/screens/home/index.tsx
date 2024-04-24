import Banner from '../../components/banner';
import image from '../../assets/logo.png'
import styles from './styles.module.css';

function Home() {
  return (
    <main className={styles.principal}>
     <Banner image={image}/>
    <section className={styles.info}>
    <h1>Currículo Fast</h1>
      <p>
         " Destaque-se em qualquer processo de seleção com nossa plataforma intuitiva de geração de currículos. Com nossa ferramenta fácil de usar, você pode criar currículos profissionais e visualmente impressionantes em questão de minutos. "
        </p>
    </section>
    </main>
  ) 
}

export default Home
