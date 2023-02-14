import "../../styles/styles.scss"
import { Link } from "react-router-dom";

import Footer from "../components/Footer"
import Header from "../components/Header"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"

import zso1 from "../../img/zso.jpg"
import zso2 from "../../img/zso2.jpg"
import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"

const EcoZso = () => {
    return (
        <div className="page">
            <div className="container">
                <Header />
                <div class="main">
                    <Buttons />
                    <SideMenu />
                </div>
                <div class="wrapper">
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumbs__item">Главная</Link> •
                        <Link to="/eco" className="breadcrumbs__item"> Экология</Link> •
                        <Link to="/eco/zso" className="breadcrumbs__item breadcrumbs__item-active"> Скважины и ЗСО</Link>
                    </div>
                    <h2 class="heading__article heading__article-side">УСТАНОВЛЕНИЕ ЗОН САНИТАРНОЙ ОХРАНЫ (ЗСО) ВОДОЗАБОРНЫХ СКВАЖИН</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для установления зон санитарной охраны водозаборных скважин необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    разработать проект ЗСО. Он включает расчеты зон санитарной охраны 1, 2, 3 пояса скважин
                                </li>
                                <li class="article__number">
                                    провести исследования качества питьевой воды из скважин
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу проекта ЗСО
                                </li>
                                <li class="article__number">
                                    согласовать проект ЗСО в территориальных органах Роспотребнадзора
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по установлению зон санитарной охраны (ЗСО) водозаборных скважин. От сбора данных для разработки проектной документации до получения положительного заключения Роспотребнадзора
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <img class="article__image article__image-start article__image-height" src={zso1} alt="Zso" />
                    <h2 class="heading__article heading__article-side">СОГЛАСОВАНИЕ ИСПОЛЬЗОВАНИЯ ВОДОЗАБОРНЫХ СКВАЖИН С РОСПОТРЕБНАДЗОРОМ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Использование водозаборных скважин для питьевого, хозяйственно-бытового, технологического водоснабжения должно быть согласовано с Роспотребнадзором с оформлением санитарно-эпидемиологического заключения.
                            </p>
                            <p class="article__paragraph">
                                Для согласования использования водозаборных скважин необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    провести исследования качества питьевой воды из скважин
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу состояния водозаборного узла и качества питьевой воды из скважин
                                </li>
                                <li class="article__number">
                                    согласовать использование водозаборных скважин для питьевого, хозяйственно-бытового, технологического водоснабжения в территориальных органах Роспотребнадзора
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по согласованию использования водозаборных скважин для питьевого, хозяйственно-бытового, технологического водоснабжения. От сбора данных до получения положительного заключения Роспотребнадзора.
                            </div>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <img class="article__image article__image-start article__image-height" src={zso2} alt="Zso 2" />
                    <h2 class="heading__article heading__article-side">РАБОЧАЯ ПРОГРАММА ПРОИЗВОДСТВЕННОГО КОНТРОЛЯ КАЧЕСТВА ПИТЬЕВОЙ ВОДЫ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Для согласования рабочей программы производственного контроля качества питьевой воды в Роспотребнадзоре необходимо:
                            </p>
                            <ol class="article__paragraph">
                                <li class="article__number">
                                    разработать рабочую программу производственного контроля качества питьевой воды
                                </li>
                                <li class="article__number">
                                    провести санитарно-эпидемиологическую экспертизу рабочей программы
                                </li>
                                <li class="article__number">
                                    согласовать рабочую программу производственного контроля качества питьевой воды в территориальных органах Роспотребнадзора
                                </li>
                            </ol>
                            <div class="article__block article__block-padding bold">
                                Компания «КАНОН» под ключ организует и выполнит комплекс мероприятий по разработке и согласованию рабочей программы производственного контроля качества питьевой воды. От сбора данных для разработки программы до получения положительного заключения Роспотребнадзора.
                            </div>
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EcoZso;

