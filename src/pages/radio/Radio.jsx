import "../../styles/styles.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"
import { Link } from "react-router-dom"

import radio from "../../img/radio.jpg"
import radio2 from "../../img/radio2.jpg"
import radio3 from "../../img/radio3.jpg"
import radio4 from "../../img/radio4.jpg"
import radio5 from "../../img/radio5.jpg"

import mgu from "../../img/mgu.png"
import mosgaz from "../../img/mosgaz.svg"
import medsi from "../../img/medsi.jpeg"
import metro from "../../img/msk-metro.png"
import rogachev from "../../img/rogachev.png"

const Radio = () => {
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
                            <Link to="/radio" className="breadcrumbs__item breadcrumbs__item-active"> Радиология</Link>
                        </div>
                        <h4 class="heading__article heading__article-side">Источники Ионизирующего излучения</h4>
                    </div>
                    <div className="wrapper">
                        <div className="article__gallery article__image-start">
                            <img class="article__picture" src={radio} alt="Radio" />
                            <img class="article__picture" src={radio2} alt="Radio 2" />
                        </div>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Источники ионизирующего излучения (ИИИ)  -   диагностическое медицинское оборудование, оборудование научных лабораторий, приборы неразрушающего контроля, досмотровые установки,  используются сегодня практически повсеместно.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="wrapper">
                        <div className="article__gallery article__gallery-threesome article__image-start">
                            <img class="article__picture" src={radio3} alt="Radio" />
                            <img class="article__picture" src={radio4} alt="Radio 2" />
                            <img class="article__picture" src={radio5} alt="Radio 3" />
                        </div>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Санитарные Правила и Нормы строго регламентируют использование, хранение и утилизацию ИИИ,  обеспечение защитных и контрольных мероприятий,  получение санитарно-эпидемиологических заключений
                                </p>
                                <p class="article__paragraph">
                                    Качественное, всестороннее и грамотное проведение этих работ под силу только специалистам, которые располагают соответствующим опытом, а также специализированным оборудованием для ее выполнения. Радиация внешне невозможно увидеть, она не определяется на запах и вкус, но ее опасность и негативное влияние на человека очень велико. Превышение уровня излучения губительно сказывается на здоровье человека, при этом самая главная особенность – в том, что проблемы с самочувствием проявляются далеко не сразу.
                                </p>
                                <p class="article__paragraph">
                                    Владельцу ИИИ необходимо:
                                </p>
                                <ul class="article__paragraph">
                                    <li class="article__item">
                                        разработать проектную документацию для помещений (либо мобильных объектов), где размещается ИИИ, с расчетом необходимого уровня защиты
                                    </li>
                                    <li class="article__item">
                                        провести ряд измерений эксплуатационных параметров оборудования и радиоационный контроль
                                    </li>
                                    <li class="article__item">
                                        пройти экспертизу проектной документации и результатов измерений
                                    </li>
                                    <li class="article__item">
                                        получить необходимую разрешительную документацию
                                    </li>
                                    <li class="article__item">
                                        вести учет и сдавать отчетность 1-Доз и 3-ДОЗ
                                    </li>
                                    <li class="article__item">
                                        разработать и сдать  радиационно-гигиенический паспорт (РГП)
                                    </li>
                                    <li class="article__item">
                                        регулярно вести учет ИДК (индивидуального дозиметрического контроля) для сотрудников, работающий с ИИИ
                                    </li>
                                </ul>
                                <p class="article__paragraph">
                                    Все эти работы мы проводим уже  более 10 лет для самых разных компаний, государственных и коммерческих, медицинских и строительных. Обратитесь к нам, мы сделаем все работы под ключ оперативно и качественно!
                                </p>
                                <p class="article__paragraph bold">
                                    НАШИ клиенты: МЕДСИ, МГУ, больница им Боткина, больница  им Рогачева, московский метрополитен, Мосгаз
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="companies">
                            <h4 class="heading__article heading__article-side">МЫ СДЕЛАЛИ ЭТО ДЛЯ</h4>
                            <div class="companies__list">
                                <img class="companies__item" src={mgu} alt="mgu" />
                                <img class="companies__item" src={medsi} alt="medsi" />
                                <img class="companies__item" src={metro} alt="metro" />
                                <img class="companies__item" src={mosgaz} alt="mosgaz" />
                                <img class="companies__item" src={rogachev} alt="rogachev" />
                            </div>
                        </section>
                    <div class="wrapper">
                        <h4 class="heading__article heading__article-side">НАШИ УСЛУГИ В ДАННОЙ ОБЛАСТИ</h4>
                    </div>
                    <div class="wrapper">
                        <div class="header__categories header__categories-prto">
                            <Link to="/radio/sez" class="header__item">ПОЛУЧЕНИЕ СЭЗ ДЛЯ ИСТОЧНИКОВ ИОНИИРУЮЩЕГО ИЗЛУЧЕНИЯ (СЭЗ ДЛЯ ИИИ)</Link>
                            <Link to="/radio/idk" class="header__item">ОТЧЕТНОСТЬ И ИНДИВИДУАЛЬНЫЙ ДОЗИМЕТРИЧЕСКИЙ КОНТРОЛЬ (ИДК)</Link>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Radio