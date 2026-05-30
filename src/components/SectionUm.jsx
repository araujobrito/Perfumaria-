import styles from "../styles/SectionUm.module.css"
import Imagem from "../assets/principallogo.svg"




function SectionUm(){
    return(
        <section className={styles.sec} id="s1">
            <div className={styles.conteiner}>
                <div className={styles.imagem}>
                    <img src={Imagem}></img>
                    
                </div>
                <div className={styles.text}>
                    <h2>Os melhores perfumes importados, das marcas mais desejadas do mundo, reunidos em um só lugar. Encontre aromas exclusivos que destacam sua personalidade, marcam presença e transformam cada momento em uma experiência única.</h2>
                    <button className={styles.botao}> Saiba mais </button>
                </div>
            </div>

        </section>
    );
}
export default SectionUm;
