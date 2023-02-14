import "../../styles/styles.scss"
import HeaderIndex from "../components/HeaderIndex"
import Footer from "../components/Footer"
import Buttons from "../components/Buttons"
import logo from "../../img/logo.png"
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
import { Link } from "react-router-dom";
import SideMenu from "../components/Sidemenu"

const Home = () => {
    return (
        <div className="page">
            <div className="container">
                <HeaderIndex />
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

export default Home