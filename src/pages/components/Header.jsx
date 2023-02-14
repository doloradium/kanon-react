import "../../styles/styles.scss"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="container">
        <header class="header">
            <div class="wrapper">
                <div class="header__top">
                    <div class="logo__container">
                        <Link to="/" class="logo__link">
                            <img class="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav class="header__navbar">
                        <ul class="dropdown">
                            <li class="dropdown__button">
                                <Link to="/eco" class="dropdown__link-button">ЭКО</Link>
                                <ul class="dropdown__content">
                                    <li class="dropdown__item">
                                        <Link to="/eco/szz" class="dropdown__link">Cанитарно-защитная зона</Link>
                                    </li>
                                    <li class="dropdown__item">
                                        <Link to="/eco/zso" class="dropdown__link">Скважины и ЗСО</Link>
                                    </li>
                                    <li class="dropdown__item">
                                        <Link to="/eco/health" class="dropdown__link">Охрана окружающей среды</Link>
                                    </li>
                                    <li class="dropdown__item">
                                        <Link to="/eco/waste" class="dropdown__link">Выбросы, сбросы, парниковые газы</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown__button">
                                <Link to="/radio" class="dropdown__link-button">РАДИО</Link>
                                <ul class="dropdown__content">
                                    <li class="dropdown__item">
                                        <Link to="/radio/idk" class="dropdown__link">Отчетность и ИДК</Link>
                                    </li>
                                    <li class="dropdown__item">
                                        <Link to="/radio/sez" class="dropdown__link">Получение санитарно-эпидемиологического заключения</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown__button">
                            <Link to="/prto" class="dropdown__link-button">ПРТО</Link>
                            <ul class="dropdown__content">
                                <li class="dropdown__item">
                                    <Link to="/prto/sez" class="dropdown__link">Получение СЭЗ и производственный контроль</Link>
                                </li>
                            </ul>
                        </li>
                            <li class="dropdown__button">
                                <Link to="/pat" class="dropdown__link-button">ПАТ</Link>
                            </li>
                            <li class="dropdown__button">
                                <Link to="/priemka" class="dropdown__link-button">ИЗМЕРЕНИЯ</Link>
                            </li>
                            <li class="dropdown__button">
                                <Link to="/about" class="dropdown__link-button">О НАС</Link>
                                <ul class="dropdown__content">
                                    <li class="dropdown__item">
                                        <Link to="/about/lab" class="dropdown__link">О лаборатории</Link>
                                    </li>
                                    <li class="dropdown__item">
                                        <Link to="/about/inspection" class="dropdown__link">Об органе инспекции</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>    
                    </nav>
                    <div class="header__contacts">
                        <a href="tel:+74956163660" class="header__phone">+7 (495) 616-36-60</a>
                        <a href="mailto:info@kanon-corp.ru" class="header__email">info@kanon-corp.ru</a>
                    </div>
                    <div class="burger__button">
                        <span class="span span-black"></span>
                        <span class="span span-black"></span>
                        <span class="span span-black"></span>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header