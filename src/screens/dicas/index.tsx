import styles from './styles.module.css';

function Dicas() {
  return (
    <div className={styles.dicascontainer}> {/* Usar a classe do módulo CSS */}
      <div className={styles.sectioncontainer}> {/* Usar a classe do módulo CSS */}
        <h1 className={styles.sectiontitle}>Por que um Bom Currículo é Importante?</h1>
        <section>
          <p>Um currículo bem elaborado é a sua primeira oportunidade de causar uma boa impressão em um potencial empregador. Ele funciona como um resumo das suas habilidades, experiências e realizações profissionais, permitindo que os recrutadores entendam rapidamente o que você tem a oferecer. Um currículo bem feito pode abrir portas e aumentar suas chances de conseguir uma entrevista para o emprego dos seus sonhos.</p>
        </section>
      </div>

      <div className={styles.sectioncontainer}> {/* Usar a classe do módulo CSS */}
        <h1 className={styles.sectiontitle}>Dicas e Boas Práticas para um Currículo Efetivo</h1>
        <section>
          <h2>1. Seja Conciso e Objetivo</h2>
          <p>Evite informações desnecessárias e foque no que é relevante para a posição desejada.</p>

          <h2>2. Destaque suas Realizações</h2>
          <p>Em vez de apenas listar suas responsabilidades, destaque conquistas e resultados tangíveis.</p>

          <h2>3. Formate com Clareza</h2>
          <p>Use uma formatação limpa e organizada, com seções claras e uma estrutura fácil de seguir.</p>

          <h2>4. Revise e Atualize Regularmente</h2>
          <p>Revise seu currículo regularmente para garantir que todas as informações estejam atualizadas e livres de erros.</p>

          <h2>5. Personalize para Cada Aplicação</h2>
          <p>Adapte seu currículo para cada vaga, destacando experiências e habilidades relevantes.</p>

          <h2>6. Inclua Palavras-Chave</h2>
          <p>Use palavras-chave relevantes para a área e a posição para aumentar a visibilidade do seu currículo em sistemas de rastreamento de candidatos.</p>
        </section>
      </div>
    </div>

  )
}

export default Dicas
