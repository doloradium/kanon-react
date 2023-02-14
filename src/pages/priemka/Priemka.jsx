import "../../styles/styles.scss"
import { Outlet, Link } from "react-router-dom";

import Footer from "../components/Footer"
import Header from "../components/Header"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"

import measure from "../../img/measure.png"
import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"


const Priemka = () => {
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
                        <Link to="/priemka" className="breadcrumbs__item breadcrumbs__item-active"> Измерения</Link>
                    </div>
                </div>
                <div className="wrapper">
                    <img class="article__image article__image-start article__image-top-0 article__image-initial" src={measure} alt="Waste" />
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Приемка построенного жилья в эксплуатацию – строго регламентированный процесс, включающий обязательные измерения, гарантирующие безопасность объектов для их будущих жителей.
                            </p>
                            <p class="article__paragraph">
                                Мы проводим весь комплекс измерений в рамках работ по приемке, и он включает:
                            </p>
                            <ul class="article__paragraph">
                                <li class="article__item">
                                    Радиационный контроль помещений: гамма-съемка ограждающих конструкций, измерение мощности эквивалентной дозы гамма-излучения в помещениях
                                </li>
                                <li class="article__item">
                                    Радиационный контроль помещений: определение среднегодового значения ЭРОА изотопов радона в воздухе помещений здания
                                </li>
                                <li class="article__item">
                                    Измерение уровня звукового давления (шум) в помещениях здания от инженерно-технического оборудования
                                </li>
                                <li class="article__item">
                                    Измерение уровня звукового давления (шум) на прилегающей территории от внешних источников
                                </li>
                                <li class="article__item">
                                    Измерение уровня виброускорения в помещениях от инженерно-технического оборудования
                                </li>
                                <li class="article__item">
                                    Измерение уровня электромагнитного излучения промышленной частоты в помещениях, смежных с электрощитовой
                                </li>
                                <li class="article__item">
                                    Измерение параметров микроклимата в помещениях здания
                                </li>
                                <li class="article__item">
                                    Измерение уровня освещенности в помещениях здания
                                </li>
                                <li class="article__item">
                                    Определение индекса изоляции воздушного шума перекрытий
                                </li>
                                <li class="article__item">
                                    Определение индекса изоляции ударного шума перекрытий
                                </li>
                                <li class="article__item">
                                    Тепловизионное обследование зданий
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">ИССЛЕДОВАНИЯ АТМОСФЕРНОГО ВОЗДУХА</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <ul class="article__paragraph">
                                <li class="article__item">
                                    Фенол — C₆H₆O
                                </li>
                                <li class="article__item">
                                    Формальдегид — CH₂O
                                </li>
                                <li class="article__item">
                                    Ацетальдегид — C₂H₄O
                                </li>
                                <li class="article__item">
                                    Дигидросульфид — H₂S
                                </li>
                                <li class="article__item">
                                    Азота оксид (II) — NO
                                </li>
                                <li class="article__item">
                                    Азота диоксид (IV) — NO₂
                                </li>
                                <li class="article__item">
                                    Углерод оксид — CO₂
                                </li>
                                <li class="article__item">
                                    Аммиак — NH₃
                                </li>
                                <li class="article__item">
                                    Этилацетат — C₄H₈O₂
                                </li>
                                <li class="article__item">
                                    Этилбензол — C₈H₁₀
                                </li>
                                <li class="article__item">
                                    Бензол — C₆H₆
                                </li>
                                <li class="article__item">
                                    Бутилацетат — C₆H₁₂O₂
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">ИССЛЕДОВАНИЯ ПИТЬЕВОЙ ВОДЫ</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <ul class="article__paragraph">
                                <li class="article__item">
                                    Запах, цветность, привкус, мутность
                                </li>
                                <li class="article__item">
                                    Перманганатная окисляемость
                                </li>
                                <li class="article__item">
                                    Водородный показатель, pH
                                </li>
                                <li class="article__item">
                                    Сухой остаток
                                </li>
                                <li class="article__item">
                                    Жёсткость общая
                                </li>
                                <li class="article__item">
                                    Железо, хлориды, нитраты
                                </li>
                            </ul>
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
                            <img class="companies__item" src={samolet} alt="Samolet" />
                            <img class="companies__item" src={mvk} alt="MVK" />
                            <img class="companies__item" src={a101} alt="A101" />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Priemka;

