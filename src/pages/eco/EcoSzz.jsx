import "../../styles/styles.scss"
import { Link } from "react-router-dom";

import Footer from "../components/Footer"
import Header from "../components/Header"
import SideMenu from "../components/Sidemenu";
import Buttons from "../components/Buttons";

import install from "../../img/install.jpg"
import termination1 from "../../img/termination1.jpeg"
import termination2 from "../../img/termination2.jpg"

import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"

const EcoSzz = () => {
    return (
        <div className="page">
            <div className="container">
                <Header />
                <Buttons />
                <div class="wrapper">
                    <SideMenu />
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumbs__item">Главная</Link> •
                        <Link to="/eco" className="breadcrumbs__item"> Экология</Link> •
                        <Link to="/eco/szz" className="breadcrumbs__item breadcrumbs__item-active"> Санитарно-защитная зона</Link>
                    </div>
                    <h2 class="heading__article heading__article-side">САНИТАРНО-ЗАЩИТНАЯ ЗОНА</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Санитарно-защитная зона (СЗЗ) — территория вокруг предприятия, отделяющая производственную и жилую зону.
                            </p>
                            <p class="article__paragraph article__block-padding">
                                До 1 октября 2024 года предприятия, в отношении которых устанавливаются санитарно-защитные зоны, обязаны обратиться в Роспотребнадзор с заявлением об установлении, изменении или прекращении существования санитарно-защитной зоны.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="wrapper">
                    <img class="article__image article__image-top" src={install} alt="Lab" />
                    <h2 class="heading__article heading__article-side">Установление санитарно-защитной зоны</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для установления санитарно-защитной зоны необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    Разработать проект СЗЗ. Он включает расчеты уровней загрязнения атмосферы и уровней шума на границе ближайшей жилой застройки, школ, детских садов, парков и т.п.
                                </li>
                                <li class="article__number">
                                    Провести инструментальные исследования атмосферного воздуха, измерения уровней шума, электромагнитного излучения (при необходимости) на границе СЗЗ
                                </li>
                                <li class="article__number">
                                    Определить координаты СЗЗ, оформить карту (план) и XML-файл в специализированной организации по проведению землеустроительных работ
                                </li>
                                <li class="article__number">
                                    Провести санитарно-эпидемиологическую экспертизу проекта СЗЗ и результатов исследований атмосферного воздуха, измерений уровней шума, электромагнитного излучения (при необходимости)
                                </li>
                                <li class="article__number">
                                    Установить СЗЗ в территориальных органах Роспотребнадзора или Федеральной Службе Роспотребнадзора (для I класса опасности) с получением Решения об установлении СЗЗ
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div className="wrapper">
                    <h2 class="heading__article heading__article-side">Прекращение существования санитарно-защитной зоны</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для прекращения существования санитарно-защитной зоны необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    Провести инструментальные исследования атмосферного воздуха, измерения уровней шума, электромагнитного излучения (при необходимости), исследования почвы на границе промплощадки
                                    <div className="article__gallery">
                                        <img class="article__picture" src={termination1} alt="Man" />
                                        <img class="article__picture" src={termination2} alt="Woman" />
                                    </div>
                                </li>
                                <li class="article__number">
                                    Определить координаты СЗЗ, оформить карту (план) и XML-файл в специализированной организации по проведению землеустроительных работ
                                </li>
                                <li class="article__number">
                                    Провести санитарно-эпидемиологическую экспертизу результатов исследований атмосферного воздуха, измерений уровней шума, электромагнитного излучения (при необходимости), исследования почвы
                                </li>
                                <li class="article__number">
                                    Прекратить существование санитарно-защитной зоны в Управлении Роспотребнадзора по г. Москве или Федеральной Службе Роспотребнадзора (для I класса опасности) с получением Решения о прекращении существования СЗЗ
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div className="wrapper">
                    <h2 class="heading__article heading__article-side">Обоснование отсутствия необходимости установления СЗЗ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для обоснования отсутствия необходимости установления СЗЗ необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    Разработать проект СЗЗ. Он включает расчеты уровней загрязнения атмосферы и уровней шума на границе ближайшей жилой застройки
                                </li>
                                <li class="article__number">
                                    Провести инструментальные исследования атмосферного воздуха и измерения уровней шума, электромагнитного излучения (при необходимости) на границе промплощадки
                                </li>
                                <li class="article__number">
                                    Провести санитарно-эпидемиологическую экспертизу проекта СЗЗ и результатов исследований атмосферного воздуха, измерений уровней шума, электромагнитного излучения (при необходимости)
                                </li>
                                <li class="article__number">
                                    Обосновать отсутствие необходимости установления СЗЗ в Управлении Роспотребнадзора по г. Москве с получением письма об отсутствии необходимости установления СЗЗ
                                </li>
                            </ol>
                            <p class="article__paragraph bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по установлению, прекращению существования санитарно-защитной зоны или  обоснованию отсутствия необходимости установления СЗЗ. От сбора данных для разработки проектной документации до получения положительного заключения Роспотребнадзора.
                            </p>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h4 class="heading__article heading__article-side">ЗАКАЗАТЬ ЗВОНОК</h4>
                    <section class="trust">
                        <div class="trust__container trust__container-side">
                            <div class="trust__item">
                                <img src={exp} alt="Experience" class="trust__icon" />
                                <div class="trust__text">Практический опыт<br></br>в сфере 14 лет</div>
                            </div>
                            <div class="trust__item">
                                <img src={labpng} alt="Lab" class="trust__icon" />
                                <div class="trust__text">Аккредитованная<br></br>лаборатория</div>
                            </div>
                            <div class="trust__item">
                                <img src={wallet} alt="Wallet" class="trust__icon" />
                                <div class="trust__text">Прозрачное<br></br>ценообразование</div>
                            </div>
                            <div class="trust__item">
                                <img src={eye} alt="Eye" class="trust__icon" />
                                <div class="trust__text">Ванимание к каждому<br></br> запросу</div>
                            </div>
                        </div>
                        <div class="header__form">
                            <p class="contacts__heading">Закажите звонок инженера</p>
                            <input class="contacts__input" type="text" placeholder="Введите имя" />
                            <input class="contacts__input" type="text" placeholder="Введите номер телефона" />
                            <button class="button button__contacts button__header">ЗАКАЗАТЬ РАСЧЁТ</button>
                        </div>
                    </section>
                    <section class="companies">
                        <h4 class="heading__article heading__article-side">МЫ СДЕЛАЛИ ЭТО ДЛЯ</h4>
                        <div class="companies__list">
                            <img class="companies__item" src={pik} alt="PIK" />
                            <img class="companies__item" src={a101} alt="A101" />
                            <img class="companies__item" src={samolet} alt="Samolet" />
                            <img class="companies__item" src={mvk} alt="MVK" />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EcoSzz