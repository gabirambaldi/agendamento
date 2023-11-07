import styles from '../cadastro/cadastro.module.css';

function Cadastro() {

  return (
    <>
  <div className={styles.all}>
    <div className={styles.main}>
    <h1 className={styles.titulo}>Cadastro de Professores</h1>
    <input className={styles.input} type='text'/>
    <br></br><br></br>
    <button className={styles.btn}>CADASTRAR</button>
    </div>

    <div className={styles.main}>
    <h1 className={styles.titulo}>Cadastro de Disciplina</h1>
    <input className={styles.input} type='text'/>
    <br></br><br></br>
    <button className={styles.btn}>CADASTRAR</button>
    </div>

    <div className={styles.main}>
    <h1 className={styles.titulo}>Cadastro de Turma</h1>
    <input className={styles.input} type='text'/>
    <br></br><br></br>
    <button className={styles.btn}>CADASTRAR</button>
    </div>
  </div>
    </>
  )
}

export default Cadastro
