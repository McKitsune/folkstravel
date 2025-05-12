import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo"></div>
            <div className="footer-content">
                <div className="footer-social">

                    <a href="https://www.instagram.com/folkstravelcolombia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon ig"></a>
                    <a href="https://www.facebook.com/profile.php?id=100038918559877" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon fb"></a>
                    <a href="https://www.youtube.com/@folkstravel5337" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon yt"></a>
                </div>
                <div className="footer-text">
                    © {new Date().getFullYear()} Folks Travel Colombia. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
