import "../../styles/styles.scss"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"

const HeaderIndex = () => {
    return (
        <div class="header header-withImage">
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
                                <Link to="/eco" class="dropdown__link-button dropdown__link-index">ЭКО</Link>
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
                                <Link to="/radio" class="dropdown__link-button dropdown__link-index">РАДИО</Link>
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
                                <Link to="/prto" class="dropdown__link-button dropdown__link-index">ПРТО</Link>
                                <ul class="dropdown__content">
                                    <li class="dropdown__item">
                                        <Link to="/prto/sez" class="dropdown__link">Получение СЭЗ и производственный контроль</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown__button">
                                <Link to="/pat" class="dropdown__link-button dropdown__link-index">ПАТ</Link>
                            </li>
                            <li class="dropdown__button">
                                <Link to="/priemka" class="dropdown__link-button dropdown__link-index">ИЗМЕРЕНИЯ</Link>
                            </li>
                            <li class="dropdown__button">
                                <Link to="/about" class="dropdown__link-button dropdown__link-index">О НАС</Link>
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
                        <a href="tel:+74956163660" class="header__phone header__phone-index">+7 (495) 616-36-60</a>
                        <a href="mailto:info@kanon-corp.ru" class="header__email header__email-index">info@kanon-corp.ru</a>
                    </div>
                    <div class="burger__button">
                        <span class="span span-white"></span>
                        <span class="span span-white"></span>
                        <span class="span span-white"></span>
                    </div>
                </div>
                <section class="header__hero">
                    <div class="header__container">
                        <div class="header__main">
                            <div class="header__text">
                                <h1 class="heading">ЭКСПЕРТИЗЫ И ИЗМЕРЕНИЯ ДЛЯ РОСПОТРЕБНАДЗОРА</h1>
                                <h2 class="heading__subtext-top">Без посредников! Собственная лаборатория и экспертный центр</h2>
                                <h3 class="heading__subtext-bottom">Сотрудники с 14-летним опытом, среди них 7 кандидатов наук. Более 10000 успешных экспертиз и измерений</h3>
                            </div>
                            <div class="header__form header__form-index">
                                <p class="contacts__heading contacts__heading-index">Закажите звонок инженера</p>
                                <form>
                                    <label>
                                        <input class="contacts__input" type="text" name="name" placeholder="Введите имя" />
                                        <input class="contacts__input" type="text" name="number" placeholder="Введите номер телефона" />
                                    </label>
                                    <input class="button__index button__contacts button" type="submit" value="ЗАКАЗАТЬ РАСЧЁТ" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="header__categories">
                        <Link to="/eco" class="header__item-index">ЭКОЛОГИЯ</Link>
                        <Link to="/pat" class="header__item-index">ПАТ</Link>
                        <Link to="/priemka" class="header__item-index">ИЗМЕРЕНИЯ</Link>
                        <Link to="/prto" class="header__item-index">ПРТО</Link>
                        <Link to="/radio" class="header__item-index">РАДИОЛОГИЯ</Link>
                        <Link to="/about" class="header__item-index">О НАС</Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeaderIndex