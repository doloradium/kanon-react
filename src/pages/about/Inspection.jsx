import "../../styles/styles.scss"
import { Link } from "react-router-dom";

import Footer from "../components/Footer"
import Header from "../components/Header"
import Buttons from "../components/Buttons"
import SideMenu from "../components/Sidemenu"

import expert1 from "../../img/expert1.jpg"
import exp from "../../img/exp.png"
import labpng from "../../img/lab.png"
import wallet from "../../img/wallet.png"
import eye from "../../img/eye.png"
import samolet from "../../img/samolet.png"
import a101 from "../../img/a101.png"
import mvk from "../../img/mvk.png"
import pik from "../../img/pik.png"

const Inspection = () => {
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
                        <Link to="/about/inspection" className="breadcrumbs__item breadcrumbs__item-active"> Об органе инспекции</Link>
                    </div>
                </div>
                <div class="wrapper">
                    <h2 class="heading__article heading__article-side">Орган Инспекции (экспертиза)</h2>
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                Орган инспекции класса «А», имеющий право проводить экспертизы и оценки, был создан в 2015 году, и тогда же получен аттестат аккредитации.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="wrapper">
                    <img class="article__picture article__image-start" src={expert1} alt="Expert 1" />
                </div>
                <section class="article__container">
                    <div class="wrapper">
                        <div class="article__block">
                            <p class="article__paragraph">
                                У нас работают специалисты с 10 летним стажем в работе по оценке соответствия проектной, технической и иной документации, видов деятельности и иной документации требованиям действующего санитарного законодательства (санитарных правил и нормативов).
                            </p>
                            <p class="article__paragraph">
                                Регулярные  процедуры проверок, проводимые Россаккредитацией,  подтверждают высокий профессиональный уровень наших экспертов и соответствие критериям Росаккредитации для органов инспекции класса «А».
                            </p>
                            <p class="article__paragraph">
                                У нас большой опыт проведения экспертиз
                            </p>
                            <ul class="article__list">
                                <li class="article__item">при согласовании размещения и эксплуатации базовых станций операторов «большой четверки»;</li>
                                <li class="article__item">объектов капитального строительства, расположенных в зоне воздействия аэродромов;</li>
                                <li class="article__item">деятельности, связанной и источниками ионизирующего и неионизирующего излучения;</li>
                                <li class="article__item">согласовании перепланировок нежилых помещений;</li>
                                <li class="article__item">установки, изменения и сокращения санитарно-защитных зон а также видов деятельности, связанных с влиянием на окружающую среду;</li>
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

export default Inspection;

