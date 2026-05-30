import styles from "../styles/SectionDois.module.css"
import Imagem from "../assets/img1.svg"
import Imagem1 from "../assets/img2.svg"
import Imagem2 from "../assets/img3.svg"
import Imagem3 from "../assets/img4.svg"
import Imagem4 from "../assets/image 3.svg"
import Imagem5 from "../assets/image 1.svg"


function SectionDois(){
    return(
        <section className={styles.sec} id="s2">
            <h1> Produtos</h1>
            <div className={styles.conteiner}>
                <div className={styles.produto}>
                    <div className={styles.pd}>
                        <img src={Imagem}></img>
                        <h2>RASASI</h2>
                        <button className={styles.botao}>Saiba mais</button>
                    </div>

                </div>
                {/*  */}
                <div className={styles.produto}>
                    <div className={styles.pd}>
                        <img src={Imagem1}></img>
                        <h2>AL WATANAIH</h2>
                        <button className={styles.botao}>Saiba mais</button>
                    </div>

                </div>
                {/*  */}
                <div className={styles.produto}>
                    <div className={styles.pd}>
                        <img src={Imagem2}></img>
                        <h2>ASDAAF</h2>
                        <button className={styles.botao}>Saiba mais</button>
                    </div>

                </div>
            </div>
            {/*  */}
            <div className={styles.conteiner}>
                <div className={styles.produto}>
                    <div className={styles.pd}>
                        <img src={Imagem3}></img>
                        <h2>Al Ward Al Wataniah</h2>
                        <button className={styles.botao}>Saiba mais</button>
                    </div>

                </div>
                {/*  */}
                <div className={styles.produto}>
                    <div className={styles.pd}>
                        <img src={Imagem4}></img>
                        <h2>RAYHAAN</h2>
                        <button className={styles.botao}>Saiba mais</button>
                    </div>

                </div>
                {/*  */}
                <div className={styles.produto}>
                    <div className={styles.pd}>
                        <img src={Imagem5}></img>
                        <h2>LATTAFA</h2>
                        <button className={styles.botao}>Saiba mais</button>
                    </div>

                </div>
            </div>
            


        </section>
    );
}
export default SectionDois;