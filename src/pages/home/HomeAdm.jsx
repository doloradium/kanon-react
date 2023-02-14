import "../../styles/styles.scss"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

import "../../styles/styles.scss"
import HeaderIndex from "../components/HeaderIndex"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import triangle from "../../img/triangle.png"
import telegram from "../../img/telegram.png"
import whatsapp from "../../img/whatsapp.png"
import arrowRight from "../../img/arrow-right.png"
import ruler from "../../img/ruler.png"
import glass from "../../img/glass.png"
import expertiese from "../../img/expertiese.png"
import consulting from "../../img/consulting.png"
import lab from "../../img/lab.jpg"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"
import aboutPic from "../../img/about-pic.jpg"
import image7 from "../../img/image7.jpg"
import image9 from "../../img/image9.jpg"
import image10 from "../../img/image10.jpeg"
import SideMenu from "../components/Sidemenu"



const HomeAdm = () => {
    return (
        <div className="page">
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
                                            <Link to="/radio/idk" class="dropdown__link">Индивидуальный дозиметрический контроль</Link>
                                        </li>
                                        <li class="dropdown__item">
                                            <Link to="/radio/sez" class="dropdown__link">Санитарно-эпидемиологическая защита</Link>
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
                                    <h1 class="heading">ЭКСПЕРТИЗЫ И ИЗМЕРЕНИЯ ДЛЯ<br />РОСПОТРЕБНАДЗОРА</h1>
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
            <div className="container">

                <div class="main main-index">
                    <Buttons />
                    <SideMenu />
                    <div class="wrapper">
                        <section class="about">
                            <div class="main__heading">
                                <img class="arrow" src={arrowRight} alt="Arrow" />
                                <h4 class="heading__article heading__article-index">О НАШЕЙ КОМПАНИИ</h4>
                            </div>
                            <div class="about__content">
                                <div class="about__block">
                                    <img class="about__picture" src={aboutPic} alt="About Us" />
                                    <div class="about__benefits">
                                        <div class="about__item"><span>{'\u02C3'}10000</span><br /> успешных<br /> экспертиз</div>
                                        <div class="about__item"><span>7</span><br /> кандидатов<br /> наук</div>
                                        <div class="about__item"><span>{'\u02C3'}14</span><br /> лет опыта<br /> работы</div>
                                    </div>
                                </div>
                                <div class="about__block">
                                    <p class="about__paragraph">
                                        Компания «КАНОН» - инжиниринговая компания, которая более 10 лет выполняет комплекс работ по санитарии, гигиене и экологии. Составной частью компании является Испытательно-лабораторный центр, оснащённый передовыми средствами измерений и исследований, что позволяет проводить оперативный и высокопрофессиональный лабораторный и инструментальный контроль ионизирующих, неионизирующих и химических факторов, в том числе воздуха помещений, воздуха окружающей среды и промышленных выбросов более чем по 200 показателям, в т.ч. суммарные углеводороды, углекислый газ, метан, фенол, формальдегид, ртуть и т.д.
                                    </p>
                                    <p class="about__paragraph">
                                        Также мы проводим контроль уровей шума, вибрации, электромагнитных полей, проводим выявление и анализ радиоактивных источников техногенных (дефектоскопическая и рентгеновская техника) и природных. Для решения задач в области санитарии мы выполняем инспекционный контроль проектной и иной документации, видов деятельности (работ, услуг) для организаций различного профиля и частных лиц.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section class="experience">
                        <div class="wrapper">
                            <h4 class="experience__article">БОЛЕЕ 14 ЛЕТ ПРОВОДИМ</h4>
                            <div class="trust trust__index">
                                <div class="trust__item trust__item-index">
                                    <img class="trust__icon" src={ruler} alt="Ruler" />
                                    <div class="trust__text">Измерения</div>
                                </div>
                                <div class="trust__item trust__item-index">
                                    <img class="trust__icon" src={glass} alt="Ruler" />
                                    <div class="trust__text">Исследования</div>
                                </div>
                                <div class="trust__item trust__item-index">
                                    <img class="trust__icon" src={expertiese} alt="Ruler" />
                                    <div class="trust__text">Экспертизы</div>
                                </div>
                                <div class="trust__item trust__item-index">
                                    <img class="trust__icon" src={consulting} alt="Ruler" />
                                    <div class="trust__text">Консультации</div>
                                </div>
                            </div>
                        </div>
                        <div class="experience__container">
                            <div class="wrapper">
                                <div class="experience__container-inner">
                                    <img class="experience__image article__image-top-60" src={image7} alt="Picture" />
                                    <div class="experience__block">
                                        <h5 class="experience__heading">Опыт</h5>
                                        <p class="experience__text">Мы работаем как с бюджетными, так и с коммерческими организациями, плодотворно сотрудничая многие годы</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="experience__container experience__container-white">
                            <div class="wrapper">
                                <div class="experience__container-inner experience__container-white">
                                    <div class="experience__block">
                                        <h5 class="experience__heading">Без посредников</h5>
                                        <p class="experience__text">Канон - это и лабораторный центр, и экспертная организация. Это позволяет нам оказывать нашим клиентам услуги "под ключ", без необходимости обращаться куда-то ещё</p>
                                    </div>
                                    <img class="experience__image" src={image10} alt="Picture" />
                                </div>
                            </div>
                        </div>
                        <div class="experience__container">
                            <div class="wrapper">
                                <div class="experience__container-inner">
                                    <img class="experience__image" src={image9} alt="Picture" />
                                    <div class="experience__block">
                                        <h5 class="experience__heading">Качество</h5>
                                        <p class="experience__text">С целью контроля качества наших профессиональных навыков и наших бизнес процессов, россаккредитация раз в два года проводит проверку, и только после её прохождения лаборатория или экспертный центр имеют право работать дальше</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="wrapper">
                        <section class="companies companies-index">
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
            </div>
            <Footer />
        </div>
    )
}

export default HomeAdm