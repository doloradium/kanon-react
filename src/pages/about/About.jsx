import "../../styles/styles.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/Sidemenu";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

const About = () => {
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
                            <Link to="/about" className="breadcrumbs__item breadcrumbs__item-active"> О нас</Link>
                        </div>
                        <h4 class="heading__article heading__article-side">О НАС</h4>
                    </div>
                    <section class="article__container">
                        <div class="wrapper">
                            <div class="article__block">
                                <p class="article__paragraph">
                                    Компания «КАНОН» - инжиниринговая компания, которая более 10 лет выполняет комплекс работ по санитарии, гигиене и экологии. Составной частью компании является Испытательно-лабораторный центр, оснащённый передовыми средствами измерений и исследований, что позволяет проводить оперативный и высокопрофессиональный лабораторный и инструментальный контроль ионизирующих, неионизирующих и химических факторов, в том числе воздуха помещений, воздуха окружающей среды и промышленных выбросов более чем по 200 показателям, в т.ч. суммарные углеводороды, углекислый газ, метан, фенол, формальдегид, ртуть и т.д. Также мы проводим контроль уровей шума, вибрации, электромагнитных полей, проводим выявление и анализ радиоактивных источников техногенных (дефектоскопическая и рентгеновская техника) и природных. Для решения задач в области санитарии мы выполняем инспекционный контроль проектной и иной документации, видов деятельности (работ, услуг) для организаций различного профиля и частных лиц.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <h4 class="heading__article heading__article-side">НАШИ УСЛУГИ В ДАННОЙ ОБЛАСТИ</h4>
                    </div>
                    <div class="wrapper">
                        <div class="header__categories header__categories-prto">
                            <Link to="/about/lab" class="header__item">О ЛАБОРАТОРИИ</Link>
                            <Link to="/about/inspection" class="header__item">ОБ ОРГАНЕ ИНСПЕКЦИИ</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About