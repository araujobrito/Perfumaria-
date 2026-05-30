import styles from "../styles/Header.module.css"
import Imagem from "../assets/logo.svg"


function Header(){
    return(

        <header className={styles.head}>
            <div className={styles.principal}>
                <div className={styles.logo}>
                    <img src={Imagem}></img>

                </div>

                <div className={styles.links}>
                    <nav className={styles.home}>
                        <a href="#s1">Home</a>
                        <a href="#s2">Compras</a>
                        <a href="#footer">Contatos</a>
                    </nav>
                    
            
                </div>

            </div>
        </header>
    );
}
export default Header;