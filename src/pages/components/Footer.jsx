import "../../styles/styles.scss"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="wrapper">
                <div class="footer__top">
                    <ul class="footer__list">
                        <li class="footer__contacts">129626, г. Москва, Проспект Мира, дом 106</li>
                        <li class="footer__contacts">129128, г. Москва, улица Бажова, дом 24</li>
                        <li class="footer__contacts">+7 (495) 616-36-60</li>
                        <li class="footer__contacts">info@kanon-corp.ru</li>
                    </ul>
                    <ul class="footer__navbar">
                        <li class="footer__item">
                            <Link to="/eco" class="footer__link">
                                ЭКОЛОГИЯ
                            </Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/radio" class="footer__link">
                                РАДИОЛОГИЯ
                            </Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/priemka" class="footer__link">
                                ИЗМЕРЕНИЯ
                            </Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/prto" class="footer__link">
                                ПРТО
                            </Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/pat" class="footer__link">
                                ПАТ
                            </Link>
                        </li>
                        <li class="footer__item">
                            <Link to="/ABOUT" class="footer__link">
                                О НАС
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="footer__bottom">
                    <p class="footer__paragraph">2022 © Все права защищены. </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer