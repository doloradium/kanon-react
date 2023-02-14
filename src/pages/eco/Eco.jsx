import "../../styles/styles.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/Sidemenu";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

import sanpin from "../../img/sanpin.jpg";

const Eco = () => {
    return (
        <div className="page">
            <div className="container">
                <Header />
                <div class="main">
                    <Buttons />
                    <SideMenu />
                    <div class="wrapper">
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumbs__item">Главная</Link> •
                            <Link to="/eco" className="breadcrumbs__item breadcrumbs__item-active"> Экология</Link>
                        </div>
                        <h4 class="heading__article heading__article-side">ЭКОЛОГИЯ</h4>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Санитарные и нормы и правила (САНПиН) регламентируют охрану окружающей среды, охраны земли и недр, охраны вод и атмосферного воздуха, определяют  перечень мероприятий, которые необходимо проводить, и разрешительных документов, которые необходимо оформить владельцам объектов.
                                </p>
                                <p class="article__paragraph">
                                    Контролем за соблюдением санитарного законодательства и оформолением необходимых документов  занимается Роспотребнадзор
                                </p>
                                <p class="article__paragraph">
                                    В рамках этой деятельности от владельцев требуется, как правило:
                                </p>
                                <ul class="article__paragraph">
                                    <li class="article__item">
                                        разработка проектной документации
                                    </li>
                                    <li class="article__item">
                                        прохождение экспертизы проектной документации
                                    </li>
                                    <li class="article__item">
                                        проведение различных лабораторных исследований, подтверждающих соответствие объекта требованиям САНПиН
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <h4 class="heading__article heading__article-side">НАШИ УСЛУГИ В ДАННОЙ ОБЛАСТИ</h4>
                    </div>
                    <div class="wrapper">
                        <div className="hub">
                            <img class="hub__image" src={sanpin} alt="Sanpin" />
                            <div class="header__categories hub__categories">
                                <Link to="/eco/szz" class="header__item">САНИТАРНО-ЗАЩИТНАЯ ЗОНА</Link>
                                <Link to="/eco/zso" class="header__item">СКВАЖИНЫ И ЗСО</Link>
                                <Link to="/eco/waste" class="header__item">ВЫБРОСЫ, СБРОСЫ, ПАРНИКОВЫЕ ГАЗЫ</Link>
                                <Link to="/eco/health" class="header__item">ОХРАНА ОКРУЖАЮЩЕЙ СРЕДЫ, ОЦЕНКА РИСКА ЗДОРОВЬЮ НАСЕЛЕНИЯ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Eco