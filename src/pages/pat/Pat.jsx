import "../../styles/styles.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import experience from "../../img/exp.png"
import lab from "../../img/lab.png"
import eye from "../../img/eye.png"
import wallet from "../../img/wallet.png"
import fsk from "../../img/fsk.png"
import krost from "../../img/krost.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import pik from "../../img/pik.png"
import pat1 from "../../img/pat1.jpg"

import { Link } from "react-router-dom";
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"

const Pat = () => {
    return (
        <div className="page">
            <div className="container">
                <Header />
                <main class="main">
                    <Buttons />
                    <SideMenu />
                    <div class="wrapper">
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumbs__item">Главная</Link> •
                            <Link to="/pat" className="breadcrumbs__item breadcrumbs__item-active"> ПАТ</Link>
                        </div>
                        <h2 class="heading__article heading__article-side">САНИТАРНО-ЭПИДЕМИОЛОГИЧЕСКОЕ ЗАКЛЮЧЕНИЯ ДЛЯ ПАТ</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    При размещении жилых и нежилых строений в приаэродромных зонах и в границах полос воздушных подходов всех аэропортов столицы текущее законодательство требует проведения оценки уровня авиационного шума. По результатам оценки роспотребнадзор выдаёт санитарно-эпидемиологическое заключение (СЭЗ)
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <img class="article__image margin-top" src={pat1} alt="Prto" />
                    </div>
                    <div class="wrapper">
                        <h2 class="heading__article heading__article-side">В РАМКАХ ОЦЕНКИ ТРЕБУЕТСЯ ТРЕБУЕТСЯ</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <ol class="article__paragraph">
                                    <li class="article__number">
                                        Провести анализ маршрутов воздушных судов для места предполагаемого строительства и определить самые "шумные" маршруты, вносящие наибольший вклад в шумовую картину
                                    </li>
                                    <li class="article__number">
                                        Провести непрерывные замеры шумов от воздушных судов выбранных маршрутов в течение 24 часов для жилых и социальных объектов и 6 часов для нежилых
                                    </li>
                                    <li class="article__number">
                                        Подготовить и направить в территориальный Роспотребнадзор комплект документов для получения санитарно-эпидемиологического заключения (СЭЗ). СЭЗ подтверждает, что работа РЭС, построенной в соответствии с проектом, не вредит здоровью населения и планируемые параметры излучения не превышают те, что указаны в СанПин. СЭЗ для ПРТО часто обозначают как «Р1»
                                    </li>
                                    <li class="article__number">
                                        Провести расшифровку результатов измерений, и рассчитать эквивалентный уровень звука, по которому звук нормируется в санитарном законодательстве
                                    </li>
                                    <li class="article__number">
                                        Провести перерасчёт на количество полётов среднего полетного дня 2019 года, который считается максимально загруженным
                                    </li>
                                    <li class="article__number">
                                        Сформировать комплект документов и подать его в роспотребнадзор для получение СЭЗ
                                    </li>
                                </ol>
                                <p class="article__block">
                                    Вы можете поручить нам эту работу как от начала до конца, так и на любом этапе
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <h4 class="heading__article heading__article-side">ЗАКАЗАТЬ ЗВОНОК</h4>
                        <div class="trust">
                            <div class="trust__container trust__container-side">
                                <div class="trust__item">
                                    <img class="trust__icon" src={experience} alt="Experience" />
                                    <div class="trust__text">Практический опыт<br />в сфере 14 лет</div>
                                </div>
                                <div class="trust__item">
                                    <img class="trust__icon" src={lab} alt="Lab" />
                                    <div class="trust__text">Аккредитованная<br />лаборатория</div>
                                </div>
                                <div class="trust__item">
                                    <img class="trust__icon" src={wallet} alt="Wallet" />
                                    <div class="trust__text">Прозрачное<br />ценообразование</div>
                                </div>
                                <div class="trust__item">
                                    <img class="trust__icon" src={eye} alt="Eye" />
                                    <div class="trust__text">Ванимание ко<br /> всем запросам</div>
                                </div>
                            </div>
                            <div class="header__form">
                                <p class="contacts__heading">Закажите звонок инженера</p>
                                <input class="contacts__input" type="text" placeholder="Введите имя" />
                                <input class="contacts__input" type="text" placeholder="Введите номер телефона" />
                                <button class="button button__contacts button__header">ЗАКАЗАТЬ РАСЧЁТ</button>
                            </div>
                        </div>
                        <section class="companies">
                            <h4 class="heading__article heading__article-side">МЫ СДЕЛАЛИ ЭТО ДЛЯ</h4>
                            <div class="companies__list">
                                <img class="companies__item" src={fsk} alt="FSK" />
                                <img class="companies__item" src={krost} alt="KROST" />
                                <img class="companies__item" src={a101} alt="A101" />
                                <img class="companies__item" src={samolet} alt="Samolet" />
                                <img class="companies__item companies__item-last" src={pik} alt="PIK" />
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Pat