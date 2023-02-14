import "../../styles/styles.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"
import experience from "../../img/exp.png"
import lab from "../../img/lab.png"
import eye from "../../img/eye.png"
import wallet from "../../img/wallet.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"
import idk from "../../img/idk.jpg"
import idk2 from "../../img/idk2.jpg"
import idk3 from "../../img/idk3.jpg"
import idk4 from "../../img/idk4.jpg"
import { Link } from "react-router-dom";

const RadioIdk = () => {
    return (
        <div className="page">
            <div className="content">
                <Header />
                <main class="main">
                    <Buttons />
                    <SideMenu />
                    <div class="wrapper">
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumbs__item">Главная</Link> •
                            <Link to="/radio" className="breadcrumbs__item"> Радиология</Link> •
                            <Link to="/radio/idk" className="breadcrumbs__item breadcrumbs__item-active"> Отчетность и ИДК</Link>
                        </div>
                        <h2 class="heading__article heading__article-side">ОТЧЕТНОСТЬ И ИДК</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Федеральный закон от 09.01.1996 г. № 3 «О радиационной безопасности населения» (ст.9) определяет среднюю годовую, а также за период трудовой деятельности, эффективную дозу для сотрудников, работающих с ИИИ.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="wrapper">
                        <h2 class="heading__article heading__article-side">ИДК</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Регулярно проводится индивидуальный дозиметрический контроль (ИДК) : каждые 3 месяца с прибора ИДК каждого сотрудника снимаются показатели, и оформляется соответствующий протокол.
                                </p>
                                <p class="article__paragraph">
                                    Наш курьер может забрать ваши ИДК, или вы можете привезти их сами в нашу лабораторию.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="wrapper">
                        <div className="article__gallery article__gallery-threesome article__image-start">
                            <img class="article__picture" src={idk} alt="Idk" />
                            <img class="article__picture" src={idk2} alt="Idk 2" />
                            <img class="article__picture" src={idk3} alt="Idk 3" />
                        </div>
                    </div>
                    <div className="wrapper">
                        <h2 class="heading__article heading__article-side">Отчёты</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Для учета и контроля исполнения закона предприятие обязано вести строгую отчетность по формам 1-ДоЗ, 2-ДОЗ, 3-ДОЗ
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <img class="full-height" src={idk4} alt="Idk 4" />
                    </div>
                    <div className="wrapper">
                        <h2 class="heading__article heading__article-side">РГП</h2>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    После  заполнения 1-ДОЗ, 3-ДОЗ необходимо заполнить Радиационно-гигиенический паспорт (РГП), куда включаются сведения  из отчетов 1_ДОЗ, 2-ДОЗ, 3-ДОЗ.
                                </p>
                                <p class="article__paragraph">
                                    Позвоните нам, и мы возьмем на себя все ваши заботы, связанные с оформлением отчетности по ИИИ.
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
                                <img class="companies__item" src={pik} alt="PIK" />
                                <img class="companies__item" src={samolet} alt="Samolet" />
                                <img class="companies__item" src={mvk} alt="MVK" />
                                <img class="companies__item" src={a101} alt="A101" />
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default RadioIdk