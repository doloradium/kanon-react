import "../../styles/styles.scss"
import { Link } from "react-router-dom";

import Footer from "../components/Footer"
import Header from "../components/Header"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"

import lab1 from "../../img/lab1.jpg"
import lab2 from "../../img/lab2.jpg"
import lab3 from "../../img/lab3.jpg"
import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"

const Lab = () => {
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
                        <Link to="/about" className="breadcrumbs__item"> О нас</Link> •
                        <Link to="/about/lab" className="breadcrumbs__item breadcrumbs__item-active"> О лаборатории</Link>
                    </div>
                </div>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">Лаборатория</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Лаборатория создана в 2014 году, и в январе 2015 года мы прошли проверку и получили аттестат аккредитации от Россаккредитации, позволяющий нам проводить измерения и исследования в соответствии нашей областью аккредитации (перечнем видов измерений и исследований).
                            </p>
                        </div>
                    </div>
                </section>
                <div className="wrapper">
                    <img class="article__picture article__image-start" src={lab1} alt="Lab 1" />
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                С 2016 года мы регулярно  и успешно проходим процедуры подтверждения компетентности, проводимые экспертами Росаккредитации, которые включают проверку системы менеджмента качества, беспристрастности, конфиденциальности, оснащения ИЛЦ, уровня профессиональной подготовки и навыков сотрудников, а также на соответствие  требованиям Росккредитации.
                            </p>
                            <p class="article__paragraph">
                                Актуальность аттестата аккредитации, как нашего, так и любого другого аккредитованного лица вы можете проверить в федеральном реестре Росаккредитации ссылка:  (https://pub.fsa.gov.ru/ral)
                            </p>
                            <p class="article__paragraph">
                                Наш лабораторный центр включает лабораторию радиационного контроля, лабораторию физических факторов и химическую лабораторию.
                            </p>
                            <p class="article__paragraph">
                                Делаем работы по радиационному контролю, измерению шумов, электромагнитного излучения и других параметров, химического состава воды, воздуха.  Наши сотрудники имеют многолетний опыт измерений и  используют современное оборудование,  внесенное в реестр средств измерений «Аршин».
                            </p>
                            <p class="article__paragraph">
                                Кроме этого, у нас аттестована электролаборатория, которая проводит измерения параметров электросетей.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="wrapper">
                    <div className="article__gallery article__image-start">
                        <img class="article__picture" src={lab2} alt="Lab 2" />
                        <img class="article__picture" src={lab3} alt="Lab 3" />
                    </div>
                </div>
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

export default Lab;

