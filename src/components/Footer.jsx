import styles from "../styles/Footer.module.css";
import Imagem from "../assets/Instagram.svg";


function Footer(){
    return(

        < footer className={styles.rodape}>
            <div className={styles.instagram}>
                <a href="https://www.instagram.com/brito_perfumesimportados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src={Imagem}></img></a>
            </div>
            <h2>@brito_perfumesimportados</h2>
            

        </footer>
    );
}
export default Footer;